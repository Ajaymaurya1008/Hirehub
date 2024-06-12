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

  return (
    <ScrollView>
      {/* Header */}
      <Header />
      {/* Slider */}

      <Slider />

      {/* Category  */}

      <Category textData={true} />

      {/* Top Jobs  */}

      <PopularJobList />
    </ScrollView>
  );
}
