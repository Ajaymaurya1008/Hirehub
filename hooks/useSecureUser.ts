import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { UserType } from "@/types/user";

export const useSecureUser = () => {
  const [user, setUser] = useState<UserType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await SecureStore.getItemAsync("user");
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error("Failed to fetch user data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};
