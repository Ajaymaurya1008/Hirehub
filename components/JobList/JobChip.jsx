import { View, Text } from 'react-native'
import React from 'react'

export default function JobChip({data}) {
  return (
    <Text
      style={{
        fontSize: 12,
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 5,
        backgroundColor: "#f3f0f0",
        fontFamily: "poppins",
      }}
    >
      {data}
    </Text>
  );
}