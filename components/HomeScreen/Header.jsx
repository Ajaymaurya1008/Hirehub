import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSecureUser } from "../../hooks/useSecureUser";

export default function Header() {
  const { user } = useSecureUser();

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 30,
        backgroundColor: Colors.PRIMARY,
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
          source={{
            uri:
              user?.photo ||
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
          }}
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
            {user?.name}
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
  );
}
