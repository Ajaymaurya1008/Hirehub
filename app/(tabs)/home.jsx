import { View, Text } from "react-native";
import React from "react";
import Header from "../../components/HomeScreen/Header";
import Slider from "../../components/HomeScreen/Slider";
import Category from "../../components/HomeScreen/Category";
import TopJobs from "../../components/HomeScreen/TopJobs";

export default function home() {
  return (
    <View>
      {/* Header */}

      <Header />

      {/* Slider */}

      <Slider />

      {/* Category  */}

      <Category />

      {/* Top Jobs  */}

      <TopJobs />
    </View>
  );
}
