import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Category from "../../components/HomeScreen/Category";
import {
  collection,
  query,
  getDocs,
  limit,
  startAfter,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import JobCard from "../../components/JobList/JobCard";
import { JobType, JobListType } from "@/types/job";

export default function explore() {
  const [allJobs, setAllJobs] = useState<JobListType>([]);
  const [lastDoc, setLastDoc] =
    useState<QueryDocumentSnapshot<DocumentData, DocumentData>>();
  const [loading, setLoading] = useState(false);
  const [moreData, setMoreData] = useState(true);

  const getAllJobs = async () => {
    if (loading || !moreData) return;

    setLoading(true);
    try {
      let q = query(collection(db, "Jobs"), limit(10));
      if (lastDoc) {
        q = query(collection(db, "Jobs"), startAfter(lastDoc), limit(10));
      }

      const querySnapshot = await getDocs(q);
      const list: JobListType = [];
      querySnapshot.forEach((doc) => {
        list.push({ JobId: doc.id, ...doc.data() } as JobType);
      });

      setAllJobs((prevJobs) => [...prevJobs, ...list]);
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setMoreData(querySnapshot.docs.length > 0);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        gap: 20,
      }}
    >
      <Text
        style={{
          fontSize: 34,
          fontWeight: "600",
          paddingVertical: 20,
          paddingHorizontal: 20,
          backgroundColor: "white",
          marginTop: 20,
          marginHorizontal: 10,
          borderRadius: 10,
        }}
      >
        Explore more
      </Text>
      <Category />
      <FlatList
        style={{ flex: 1, paddingHorizontal: 20 }}
        horizontal={false}
        data={allJobs}
        keyExtractor={(item) => item.Id}
        renderItem={({ item, index }) => <JobCard index={index} item={item} />}
        onEndReached={getAllJobs}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
      />
    </View>
  );
}
