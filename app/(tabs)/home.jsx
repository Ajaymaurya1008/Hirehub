import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/HomeScreen/Header";
import Slider from "../../components/HomeScreen/Slider";
import Category from "../../components/HomeScreen/Category";
import PopularJobList from "../../components/HomeScreen/PopularJobList";
import { collection, getDocs, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { useUser } from "@clerk/clerk-expo";

export default function home() {
  const { user } = useUser();

  const fetchData = async () => {
    const url = "https://jsearch.p.rapidapi.com/search";
    const params = new URLSearchParams({
      query: "Frontend Developer",
      page: "1",
      num_pages: "1",
      date_posted: "all",
    });

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.EXPO_PUBLIC_JOB_SEARCH_API,
        "x-rapidapi-host": "jsearch.p.rapidapi.com",
      },
    };

    try {
      const jobsCollectionToDelete = collection(db, "Jobs");
      const querySnapshot = await getDocs(jobsCollectionToDelete);
      const deletePromises = querySnapshot.docs.map((doc) =>
        deleteDoc(doc.ref)
      );
      await Promise.all(deletePromises);
      console.log("All documents deleted successfully");
      const res = await fetch(`${url}?${params.toString()}`, options);
      const jobData = await res.json();
      const jobList = jobData.data.map((item) => ({
        Category: "Frontend",
        Company: item.employer_name,
        JobPublisher: item.job_publisher,
        Link: item.job_apply_link,
        Role: item.job_title,
        Logo: item.employer_logo,
        Location: item.job_city,
        About: item.job_description,
        Id: item.job_id,
        Type: item.job_employment_type,
      }));
      const jobsCollection = collection(db, "Jobs");
      const promises = jobList.map((job) => addDoc(jobsCollection, job));
      await Promise.all(promises);
      console.log("All documents added successfully");
      // console.log("done");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      {/* Header */}
      <Header />
      {/* {user.emailAddresses == "ajaykvmaurya@gmail.com" && (
        <Text
          onPress={fetchData}
          style={{
            backgroundColor: "#000",
            color: "#fff",
            width: 50,
          }}
        >
          hello
        </Text>
      )} */}

      {/* Slider */}

      <Slider />

      {/* Category  */}

      <Category textData={true} />

      {/* Top Jobs  */}

      <PopularJobList />
    </ScrollView>
  );
}
