import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  StyleSheet,
} from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useState, useEffect } from "react";
import { Redirect, router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Colors } from "@/constants/Colors";
import LottieView from "lottie-react-native";

const { width } = Dimensions.get("window");

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken, user } = await GoogleSignin.signIn();
      if (idToken) {
        await SecureStore.setItemAsync("idToken", idToken);
        await SecureStore.setItemAsync("user", JSON.stringify(user));
        router.replace("/home");
      }
    } catch (e) {
      console.log(e, "system error");
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: process.env.GOOGLE_WEB_CLIENT_ID,
    });
  }, []);

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync("idToken");
      if (token) {
        setIsLoggedIn(true);
      }
    };
    checkToken();
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Redirect href={"/home"} />
      ) : (
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

          <View style={styles.animationContainer}>
            <LottieView
              source={require("../assets/onboarding.json")}
              autoPlay
              loop
              style={styles.lottieAnimation}
            />
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.title}>Find Your Dream Job Now</Text>

            <Text style={styles.description}>
              Connect with top companies and discover opportunities in one
              platform
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={signin}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  animationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  lottieAnimation: {
    width: width,
    height: width,
  },
  contentContainer: {
    paddingHorizontal: 40,
    paddingBottom: 60,
  },
  title: {
    fontSize: 32,
    fontFamily: "poppins-bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    fontFamily: "poppins-medium",
    color: "#666666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 40,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 18,
    borderRadius: 16,
    shadowColor: Colors.PRIMARY,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "poppins-bold",
    color: "#ffffff",
    textAlign: "center",
  },
});
