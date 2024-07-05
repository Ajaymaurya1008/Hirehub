import { View, Text, FlatList } from "react-native";
import { Colors } from "../../constants/Colors";
import { useState, useEffect } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import JobCard from "./JobCard";

export default function PopularJobList() {
  const [jobs, setJobs] = useState([]);

  const getJObs = async () => {
    const q = query(collection(db, "Jobs"));
    const querySnapshot = await getDocs(q);
    const list = querySnapshot.docs.map((doc) => ({
      JobId: doc?.id,
      ...doc.data(),
    }));
    setJobs(list);
  };

  useEffect(() => {
    getJObs();
  }, []);

  return (
    <View
      style={{
        marginBottom: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "poppins-bold",
          }}
        >
          Popular Jobs
        </Text>
        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: "poppins-med",
          }}
        >
          View All
        </Text>
      </View>
      <FlatList
        data={jobs.slice(0, 5)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
        style={{
          paddingHorizontal: 20,
        }}
        renderItem={({ item, index }) => (
          <JobCard key={index} item={item} index={index} />
        )}
      />
    </View>
  );
}
