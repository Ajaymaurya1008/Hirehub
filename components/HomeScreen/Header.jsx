import { View, Text, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "../../constants/Colors";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Header() {
  const { user } = useUser();

  return (
    <LinearGradient
      colors={["#00c6fb", "#005bea"]}
      style={{
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    >
      <View
        style={{
          padding: 20,
          paddingTop: 50,
          //   backgroundColor: Colors.PRIMARY,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={{ uri: user?.imageUrl }}
            style={{
              height: 45,
              width: 45,
              borderRadius: 99,
            }}
          />
          <View>
            <Text
              style={{
                color: "#fff",
              }}
            >
              Welcome
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "poppins-med",
                color: "#fff",
              }}
            >
              {user?.fullName}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#fff",
            marginVertical: 10,
            padding: 10,
            borderRadius: 8,
            gap: 10,
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Ionicons name="search" size={24} color={Colors.PRIMARY} />
          <TextInput
            placeholder="Search..."
            style={{
              fontFamily: "poppins",
              fontSize: 16,
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
}
