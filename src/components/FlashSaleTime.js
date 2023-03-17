import { View, Text } from "react-native";
import React from "react";
import {
  FireIcon,
  ArrowLongRightIcon,
} from "react-native-heroicons/outline";

export default function TimeBlock() {
  return (
    <View className="bg-[#EFF6FB] flex-row space-x-1 py-4">
      <View className="flex-row space-x-1 items-center">
        <FireIcon color={"#FEBE34"} size={"25"} opacity={0.9} />
        <Text className="font-semibold text-[#737C80]">Flash Sale</Text>
      </View>
      <View className="flex-row space-x-1 items-center">
        <View className="bg-[#0F99F7] text-white font-medium px-2 py-1 rounded-md items-center">
          <Text className="text-white">5</Text>
          <Text className="text-white">Days</Text>
        </View>
        <Text className="text-xl font-semibold">:</Text>
      </View>
      <View className="flex-row space-x-1 items-center">
        <View className="bg-[#0F99F7] text-white font-medium px-2 py-1 rounded-md items-center">
          <Text className="text-white text-sm">12</Text>
          <Text className="text-white text-sm">Hours</Text>
        </View>
        <Text className="text-xl font-semibold">:</Text>
      </View>
      <View className="flex-row space-x-1 items-center">
        <View className="bg-[#0F99F7] text-white font-medium px-2 py-1 rounded-md items-center">
          <Text className="text-white text-sm">5</Text>
          <Text className="text-white text-sm">Min</Text>
        </View>
        <Text className="text-xl font-semibold">:</Text>
      </View>
      <View className="flex-row space-x-1 items-center">
        <View className="bg-[#0F99F7] text-white font-medium px-2 py-1 rounded-md items-center">
          <Text className="text-white text-sm">5</Text>
          <Text className="text-white text-sm">Min</Text>
        </View>
        {/* <Text className="text-2xl font-semibold">:</Text> */}
      </View>
      <View className="bg-[#D8EAFB] text-white font-medium px-2 py-1 rounded-md items-center justify-center">
        <View className="bg-[#0F99F7] p-1 rounded-full">
          <ArrowLongRightIcon color={"white"} size={"20"} opacity={0.9} />
        </View>
      </View>
    </View>
  );
}
