import { View, Text, Image } from "react-native";
import React from "react";

export default function SponsoredCard({ id, name, price, image }) {
  return (
    <View className="mx-1 my-1 rounded-md border border-[#2894F6] items-center">
      <Image source={{ uri: image }} className="h-24 w-28" />
      <Text>{name}</Text>
      <Text className="text-[#91A1AC] font-semibold">Just in {price}</Text>
    </View>
  );
}
