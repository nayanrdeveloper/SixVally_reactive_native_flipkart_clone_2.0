import { View, Text, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";

export default function ProductCard({
  id,
  name,
  image,
  discount,
  rating,
  originalPrice,
  sellPrice,
}) {
  return (
    <View className="p-3 border border-[#007DF4] rounded-md mx-2 w-56 space-y-2 shadow">
      <View className="relative">
        <Image source={{ uri: image }} alt={name} className="w-48 h-60" />
        <Text className="absolute top-2 left-3 p-1 bg-[#007DF4] text-white text-xl font-semibold rounded-md">
          {discount}%
        </Text>
      </View>
      <Text className="text-[#868A8B] font-medium">{name}</Text>
      <View className="flex-row justify-between items-center">
        <View className="flex-row space-x-1 items-center">
          <Text>{rating}</Text>
          <StarIcon color={"#FA9D2E"} size={"25"} opacity={0.9} />
        </View>
        <View className="flex-row space-x-2">
          <Text className="line-through text-[#91A1AC]">₹ {originalPrice}</Text>
          <Text className="text-[#2894F6] font-semibold">₹ {sellPrice}</Text>
        </View>
        <View></View>
      </View>
    </View>
  );
}
