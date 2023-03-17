import { View, Text, Image } from "react-native";
import React from "react";

export default function InterestingFindsCard({ id, name, desc, image }) {
  return (
    <View className="p-2 bg-white w-40 mx-2 my-2 rounded-md items-center">
      <Image source={{ uri: image }} alt={name} className="w-28 h-28" />
      <Text className="">{name}</Text>
      <Text className="text-green-600 font-semibold">{desc}</Text>
    </View>
  );
}
