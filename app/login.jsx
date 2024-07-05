import React from "react";
import * as WebBrowser from "expo-web-browser";
import { View, Text, TouchableOpacity } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

// WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "orange",
          padding: 20,
          borderRadius: 10,

        }}
        onPress={onPress}
      >
        <Text
          style={{
            fontSize: 60,
            fontFamily: "poppins-med",

          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignInWithOAuth;
