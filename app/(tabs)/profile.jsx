import { View, Text, Image, TouchableOpacity, Share } from "react-native";
import React from "react";
import { useClerk, useUser } from "@clerk/clerk-expo";

export default function profile() {
  // const { user } = useUser();
  const { signOut } = useClerk();

  const handeleLogOut = async () => {
    await signOut();
    console.log("Sign Out");
  };

  const handleShare = async () => {
    Share.share({
      message:"Download hirehub app now"
    })
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 34,
          padding: 25,
          fontWeight: "600",
        }}
      >
        Profile
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          backgroundColor: "#fff",
          padding: 20,
          marginHorizontal: 30,
          borderRadius: 15,
        }}
      >
        <Image
          source={{
            uri:
              // user.imageUrl ||
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
          }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 99,
          }}
        />
        <Text>{ "Ajay Maurya"}</Text>
        <Text>{"ajmaurya@gmail.com"}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          padding: 20,
          marginHorizontal: 30,
          borderRadius: 15,
        }}
      >
        <TouchableOpacity
          onPress={handleShare}
          style={{
            backgroundColor: "#fff",
            borderRadius: 15,
            width: 80,
            height: 80,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/2099/2099122.png",
            }}
            style={{ width: 40, height: 40 }}
          />
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
            }}
          >
            Share
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handeleLogOut}
          style={{
            backgroundColor: "#fff",
            borderRadius: 15,
            width: 80,
            height: 80,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/4034/4034536.png",
            }}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
            }}
          >
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
