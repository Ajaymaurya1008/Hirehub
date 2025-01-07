import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { FlatList } from "react-native";
import { SliderType } from "@/types/slider";

export default function Slider() {
  const [sliderLsit, setSliderList] = useState<SliderType[]>([]);

  const GetSlidertList = async () => {
    const q = query(collection(db, "Slider"));
    const querySnapshot = await getDocs(q);

    const list:SliderType[] = [];
    querySnapshot.forEach((doc) => {
      list.push(doc.data() as SliderType)
    })

    // const list = querySnapshot.docs.map((doc) => doc.data());
    setSliderList(list);
  };

  useEffect(() => {
    GetSlidertList();
  }, []);

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "poppins-bold",
          paddingLeft: 20,
          paddingTop: 20,
        }}
      >
        #Special for you
      </Text>
      <FlatList
        style={{
          paddingLeft:10
        }}
        data={sliderLsit}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            style={{
              width: 300,
              height: 150,
              marginRight: 15,
              borderRadius: 15,
            }}
            source={{ uri: item.imageUrl || "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" }}
          />
        )}
      />
    </View>
  );
}
