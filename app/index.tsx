import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useState, useEffect } from "react";
import { Redirect, router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Colors } from "@/constants/Colors";
import {
  useTruecaller,
  TRUECALLER_ANDROID_CUSTOMIZATIONS,
} from "@kartikbhalla/react-native-truecaller";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {
    initializeTruecaller,
    openTruecallerModal,
    user,
    isTruecallerSupported,
  } = useTruecaller({
    // iosAppKey: "YOUR_IOS_APP_KEY",
    // iosAppLink: "YOUR_IOS_APP_LINK",
    androidButtonColor: "#4287f5",
    androidButtonStyle: TRUECALLER_ANDROID_CUSTOMIZATIONS.BUTTON_STYLES.ROUND,
    androidButtonText: TRUECALLER_ANDROID_CUSTOMIZATIONS.BUTTON_TEXTS.CONTINUE,
    androidButtonTextColor: "#FFFFFF",
    androidClientId: "6bdgpq5mx9cr0erty7eheurzu7h7lj0ak-ryhhdwkug",
    androidConsentHeading:
      TRUECALLER_ANDROID_CUSTOMIZATIONS.CONSENT_HEADING_TEXTS.LOG_IN_TO,
    androidFooterButtonText:
      TRUECALLER_ANDROID_CUSTOMIZATIONS.FOOTER_BUTTON_TEXTS.SKIP,
  });
  const isSupported = isTruecallerSupported();

  console.log("is suuported",isSupported)
  console.log("user",user)

  useEffect(() => {
    initializeTruecaller();
  }, []);


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
      <StatusBar barStyle={"dark-content"} />
      {isLoggedIn ? (
        <Redirect href={"/home"} />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
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
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Colors.PRIMARY,
              padding: 20,
              borderRadius: 10,
            }}
            onPress={() => openTruecallerModal()}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontFamily: "poppins-med",
              }}
            >
              Truecaller
            </Text>
          </TouchableOpacity>
          {user && (
            <View>
              <Text
                style={{
                  marginTop: 50,
                  textAlign: "center",
                }}
              >
                {user?.firstName}
                {user?.lastName + "\n"}
                {user?.email + "\n"}
                {user?.mobileNumber}
              </Text>
            </View>
          )}
        </View>
      )}
    </>
  );
}
