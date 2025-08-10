import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
  StyleSheet,
} from "react-native";
import React from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { LinearGradient } from "expo-linear-gradient";
import { Linking } from "react-native";
import { useSecureUser } from "../../hooks/useSecureUser";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";

export default function profile() {
  const { user } = useSecureUser();
  const handleLogOut = async () => {
    try {
      await SecureStore.deleteItemAsync("idToken");
      await SecureStore.deleteItemAsync("user");
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      router.replace("/");
    } catch (e) {
      console.log(e);
    }
  };

  const handleShare = async () => {
    Share.share({
      message:
        "Download hirehub app now \n https://play.google.com/store/apps/details?id=com.ajaymaurya1008.hirehub",
    });
  };

  const handlePrivacy = async () => {
    Linking.openURL("https://hirehub-web.vercel.app/privacy");
  };

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          borderRadius: 10,
          backgroundColor: "white",
          width: "100%",
          padding: 20,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 34,
            fontWeight: "600",
          }}
        >
          Profile
        </Text>
      </View>
      <LinearGradient
        colors={["#9469DB", "#7A11E0"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 20,
          borderRadius: 10,
          width: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "30%",
          }}
        >
          <Image
            source={{
              uri:
                user?.photo ||
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
            }}
            style={{
              width: 70,
              height: 70,
              borderRadius: 99,
              borderWidth: 5,
              borderColor: "#D0CDF6",
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "70%",
            gap: 5,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "#fff",
            }}
          >
            {user?.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#fff",
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {user?.email}
          </Text>
        </View>
      </LinearGradient>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          borderRadius: 10,
          width: "100%",
        }}
      >
        <TouchableOpacity onPress={handleShare} style={styles.card}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/2099/2099122.png",
            }}
          />
          <Text style={styles.text}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogOut} style={styles.card}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/7756/7756285.png",
            }}
          />
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePrivacy} style={styles.card}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/4926/4926149.png",
            }}
          />
          <Text style={styles.text}>Privacy</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={handleDeleteAccount} style={styles.card}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/7787/7787073.png",
            }}
          />
          <Text style={styles.text}>Delete Account</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    gap: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 60,
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    fontWeight: "700",
    fontSize: 22,
    color: "#706f73",
    fontFamily: "poppins-med",
  },
});
