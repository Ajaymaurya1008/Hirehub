import { View, Text, Image, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";
import JobChip from "../Common/JobChip";

export default function JobCard({ item, index }) {
  const router = useRouter();

  const getFirstTwoWords = (text) => {
    return text.split(" ").slice(0, 2).join("");
  };

  return (
    <TouchableOpacity
      onPress={() => router.push(`JobDetail/${item.JobId}`)}
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
        <Image
          source={{
            uri:
              item.Logo ||
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
          }}
          style={{ width: 50, height: 50, borderRadius: 10 }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
            {getFirstTwoWords(item.Role)}
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
