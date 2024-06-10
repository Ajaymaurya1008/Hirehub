import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";
import JobChip from "../Common/JobChip";

export default function JobCard({ item, index }) {
  const router = useRouter();

  const getFirstWord = (text) => {
    return text.split(" ").slice(0, 1).join("");
  };

  return (
    <TouchableOpacity
      onPress={() => router.push(`JobDetail/${item.JobID}`)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 15,
        marginBottom: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: "auto",
        height: "auto",
        borderRadius: 10,
        backgroundColor: "#fff",
        paddingBottom: 20,
        cursor: "pointer",
        // padding:100
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
            numberOfLines={1}
            ellipsizeMode="tail"
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
        <JobChip data={item.Location || "Unknown"} />
        <JobChip data={item.Type || "Fulltime"} />
        <JobChip data={item.JobPublisher || "Website"} />
      </View>
    </TouchableOpacity>
  );
}
