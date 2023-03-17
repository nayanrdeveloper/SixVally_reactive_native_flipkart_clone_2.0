import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  FireIcon,
  ArrowLongRightIcon,
} from "react-native-heroicons/outline";
import FlashSaleTime from "../components/FlashSaleTime";
import ProductCard from "../components/ProductCard";
import Products from "../components/Products";
import Categories from "../components/Categories";
import Sponsored from "../components/Sponsored";
import InterestingFinds from "../components/InterestingFinds";

export default function MainScreen() {
  return (
    <ScrollView className="bg-white">
      <View className="mx-2 space-y-3">
        {/* Header */}
        <View className="flex flex-row justify-between mt-10">
          <View className="flex flex-row items-center space-x-2">
            <ShoppingCartIcon color={"#4797EF"} size={"35"} opacity={0.9} />
            <Text className="text-[#4E4E4E] text-xl font-semibold">
              SixVally
            </Text>
          </View>
          <View>
            <ShoppingCartIcon color={"#4797EF"} size={"35"} opacity={0.9} />
          </View>
        </View>
        {/* Search Bar */}
        <View className="shadow flex flex-row items-center space-x-2 mt-5 py-1 border border-gray-300 rounded-md">
          <TextInput
            className="py-1 px-1 w-80"
            placeholder="Search Services..."
          />
          <View className="p-1 bg-[#4797EF] rounded-md">
            <MagnifyingGlassIcon color={"white"} size={"25"} opacity={0.9} />
          </View>
        </View>
        <View className="rounded-md">
          <Image
            source={{
              uri: "https://www.shoppre.com/img/shoppre/online-shopping-indian-festival-sales-offers.jpg",
            }}
            className="h-40 w-full rounded-md"
          />
        </View>
        <View>
          <FlashSaleTime />
        </View>
        <View>
          <Products />
        </View>
        {/* Categories */}
        <View>
          <View className="flex-row justify-between items-center">
            <Text className="text-[#787C7E] text-xl font-semibold">
              Categories
            </Text>
            <View className="flex-row items-center space-x-1">
              <Text className="text-[#FAB494] font-semibold">View All</Text>
              <ArrowLongRightIcon
                color={"#FAB494"}
                size={"20"}
                className="font-semibold"
              />
            </View>
          </View>
          <Categories />
        </View>
        {/* Sponsered */}
        <View>
          <View className="">
            <Text className="text-[#787C7E] text-xl font-semibold">
              Sponsored
            </Text>
          </View>
          <Sponsored />
        </View>
        {/*  */}
        <View className="mt-2">
          <InterestingFinds />
        </View>
      </View>
    </ScrollView>
  );
}
