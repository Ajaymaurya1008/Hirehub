import { useRouter } from "expo-router";
import { useState, useEffect, useLayoutEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      router.push("/home");
    }
  }, [isMounted]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => router.push("/home")}>Home</Text>
    </View>
  );
}
