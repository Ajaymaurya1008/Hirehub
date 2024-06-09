import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import SignInWithOAuth from "@/components/SignInWithOAuth";
import * as SecureStore from "expo-secure-store";


const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function RootLayout() {
  useFonts({
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    "poppins-med": require("../assets/fonts/Poppins-Medium.ttf"),
    "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });



  const exportData = async () => {
    try {
      const docRef = await addDoc(collection(db, "Jobs"), data);
      console.log(docRef);
    } catch (error) {
      console.log(error);
    }
  };


  const fetchData = async () => {
    const url = "https://jsearch.p.rapidapi.com/search";
    const params = new URLSearchParams({
      query: "Frontend Developer",
      page: "1",
      num_pages: "1",
      date_posted: "all",
    });

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.JOB_SEARCH_API,
        "x-rapidapi-host": "jsearch.p.rapidapi.com",
      },
    };

    try {
      console.log(process.env.JOB_SEARCH_API)
      const response = await fetch(`${url}?${params.toString()}`, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };




  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <SignedIn>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SignedIn>
      <SignedOut>
        <SignInWithOAuth />
      </SignedOut>
    </ClerkProvider>
  );
}
