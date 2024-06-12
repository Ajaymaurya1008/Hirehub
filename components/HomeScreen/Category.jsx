import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { FlatList } from "react-native";
import CategoryList from "./CategoryList";

export default function Category({textData}) {
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    const q = query(collection(db, "Category"));
    const querySnapshot = await getDocs(q);
    const list = querySnapshot.docs.map((doc) => doc.data());
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
            marginTop: 10,
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
            View All
          </Text>
        </View>
      )}
      <FlatList
        data={category}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          marginLeft: 20,
        }}
        renderItem={({ item, index }) => (
          <CategoryList item={item} index={index} />
        )}
      />
    </View>
  );
}
