import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as Updates from "expo-updates";


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    "poppins-med": require("../assets/fonts/Poppins-Medium.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="JobDetail/[JobId]" />
      <Stack.Screen name="JobList/[JobCategory]" />
    </Stack>
  );
}
