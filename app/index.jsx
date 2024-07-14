import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useEffect } from "react";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Colors } from "@/constants/Colors";

export default function Index() {
  const signin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken, user } = await GoogleSignin.signIn();
      console.log(user);
      await SecureStore.setItemAsync("idToken", idToken);
      await SecureStore.setItemAsync("user", JSON.stringify(user));
      router.push("/home");
    } catch (e) {
      console.log(e);
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
        router.push("/home");
      }
    };
    checkToken();
  }, []);

  return (
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
          Sign Up with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
}
