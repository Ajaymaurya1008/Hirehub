import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { FlatList } from "react-native";
import CategoryList from "./CategoryList";
import { JobListType } from "@/types/job";
import { CategoryType } from "@/types/category";

export default function Category({textData}:{textData?:boolean}) {
  const [category, setCategory] = useState<CategoryType[]>([]);

  const getCategory = async () => {
    const q = query(collection(db, "Category"));
    const querySnapshot = await getDocs(q);
    const list = querySnapshot.docs.map((doc) => doc.data()) as CategoryType[];
    setCategory(list);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <View>
      {textData && (
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
            Category
          </Text>
          <Text
            style={{
              color: Colors.PRIMARY,
              fontFamily: "poppins-med",
            }}
          >
            {/* View All */}
          </Text>
        </View>
      )}
      <FlatList
        data={category}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          marginLeft: 10,
          backgroundColor: "white",
          padding: 10,
          borderRadius: 10,
          marginRight: 10,
        }}
        renderItem={({ item, index }) => (
          <CategoryList item={item} index={index} />
        )}
      />
    </View>
  );
}
