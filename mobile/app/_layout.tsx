import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { getApp } from "@react-native-firebase/app";
import {
  getInitialNotification,
  getMessaging,
  getToken,
  onMessage,
  onNotificationOpenedApp,
  setBackgroundMessageHandler,
} from "@react-native-firebase/messaging";
import * as Notifications from "expo-notifications";
import { Alert } from "react-native";

const messaging = getMessaging(getApp());

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    "poppins-med": require("../assets/fonts/Poppins-Medium.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  async function requestUserPermission() {
    const { status } = await Notifications.requestPermissionsAsync();
    const enabled = status === "granted";

    if (enabled) {
      console.log("Authorization status:", status);
    }
    return enabled;
  }

  useEffect(() => {
    requestUserPermission().then((res)=>{
      if(!res) return
    })

    getToken(messaging)
      .then((token) => {
        console.log("fcm token", token);
      })
      .catch((e) => {
        console.log("fcm token unavailable", e.message);
      });

    getInitialNotification(messaging).then(async (remoteMessage) => {
      if (remoteMessage) {
        console.log(
          "Notification caused app to open from quiet state:",
          remoteMessage.notification
        );
      }
    });

    onNotificationOpenedApp(messaging, (remoteMessage) => {
      console.log(
        "notification caused app to open from background state:",
        remoteMessage.notification
      );
    });

    setBackgroundMessageHandler(messaging, async (remoteMessage) => {
      console.log("Message handled in the background state:", remoteMessage);
    });

    const unsubscribe = onMessage(messaging, async (remoteMessage) => {
      Alert.alert("A new message is here!", JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    async function prepare() {
      try {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      } catch (error) {
        console.log(error);
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="JobDetail/[JobId]" />
      <Stack.Screen name="JobList/[JobCategory]" />
    </Stack>
  );
}
