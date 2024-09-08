import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useState, useEffect } from "react";
import { Redirect, router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Colors } from "@/constants/Colors";

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
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Colors.PRIMARY,
              padding: 20,
              borderRadius: 10,
            }}
            onPress={signin}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontFamily: "poppins-med",
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
