import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts({
    'poppins':require("../assets/fonts/Poppins-Regular.ttf"),
    'poppins-med':require("../assets/fonts/Poppins-Medium.ttf"),
    'poppins-bold':require("../assets/fonts/Poppins-Bold.ttf")
  })


  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="index" /> */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
