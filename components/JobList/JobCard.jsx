import { View, Text, Image,TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function JobCard({ item, index }) {

  const router = useRouter()

  return (
    <TouchableOpacity
      onPress={()=>router.push(`JobDetail/${item.JobID}`)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 15,
        marginBottom:15,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: "auto",
        height: "auto",
        borderRadius: 10,
        backgroundColor: "#fff",
        paddingBottom: 20,
      }}
    >
      <View
        key={index}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Image source={{ uri: item.Logo }} style={{ width: 50, height: 50 }} />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#6F727B",
              fontSize: 12,
              fontFamily: "poppins-med",
            }}
          >
            {item.Company}
          </Text>
          <Text
            style={{
              color: Colors.PRIMARY,
              fontSize: 16,
              fontWeight: "bold",
              fontFamily: "poppins-med",
            }}
          >
            {item.Role}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 12,
            paddingHorizontal: 10,
            paddingVertical: 2,
            borderRadius: 5,
            backgroundColor: "#f3f0f0",
            fontFamily: "poppins",
          }}
        >
          {item.Location}
        </Text>
        <Text
          style={{
            fontSize: 12,
            paddingHorizontal: 10,
            paddingVertical: 2,
            borderRadius: 5,
            backgroundColor: "#f3f0f0",
            fontFamily: "poppins",
          }}
        >
          {item.Type}
        </Text>
        <Text
          style={{
            fontSize: 12,
            paddingHorizontal: 10,
            paddingVertical: 2,
            borderRadius: 5,
            backgroundColor: "#f3f0f0",
            fontFamily: "poppins",
          }}
        >
          {item.JobPublisher}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
