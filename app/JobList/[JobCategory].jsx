import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import JobCard from "../../components/JobList/JobCard";

export default function JobsbyCategory() {
  const [JobList, setJobList] = useState([]);
  const naviagte = useNavigation();
  const { JobCategory } = useLocalSearchParams();

  const getJobList = async () => {
    try {
      const q = query(
        collection(db, "Jobs"),
        where("Category", "==", JobCategory)
      );
      const querySnapshot = await getDocs(q);
      const list = querySnapshot.docs.map((doc) => ({
        JobId: doc?.id,
        ...doc.data(),
      }));
      setJobList(list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobList();
  }, []);

  useEffect(() => {
    naviagte.setOptions({
      headerShown: true,
      title: JobCategory,
    });
  }, []);

  return (
    <View>
      {JobList.length > 0 ? (
        <FlatList
          style={{
            padding: 15,
          }}
          data={JobList}
          renderItem={({ item, index }) => (
            <JobCard item={item} index={index} />
          )}
        />
      ) : (
        <Text
          style={{
            fontSize: 20,
            fontFamily: "poppins-bold",
            color: "#6F727B",
            textAlign: "center",
            marginTop: "40%",
          }}
        >
          No Jobs Found
        </Text>
      )}
    </View>
  );
}
