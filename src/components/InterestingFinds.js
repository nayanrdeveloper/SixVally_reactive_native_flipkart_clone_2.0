import { View, Text } from "react-native";
import React from "react";
import InterestingFindsCard from "./InterestingFindsCard";
import { ChevronRightIcon } from "react-native-heroicons/solid";
import FeatureData from "../data/featureData";

export default function InterestingFinds() {
  const interestingItems = [
    {
      id: 1,
      name: "True Wireless",
      desc: "From 500",
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61UlC7ymYuL._SY355_.jpg",
    },
    {
      id: 2,
      name: "Bags, Wallets & Belts",
      desc: "Under 199",
      image:
        "https://cdn.igp.com/f_auto,q_auto,t_pnopt6prodlp/products/p-leather-wallet-and-belt-personalized-combo-for-men-brown-155348-m.jpg",
    },
    {
      id: 3,
      name: "Casual Shoes",
      desc: "Under 299",
      image:
        "https://rukminim1.flixcart.com/image/832/832/ktrk13k0/shoe/3/r/7/9-8018-xtoon-white-parrot-original-imag7yn7uaggmkng.jpeg?q=70",
    },
    {
      id: 4,
      name: "Musical Toys",
      desc: "Min 50% Off",
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/zoom/11874034a.jpg",
    },
  ];
  return (
    <View className="space-y-3">
      {FeatureData.map((featureItem) => {
        console.log(featureItem);
        return (
          <View className={`bg-[#2894F6] p-2 rounded-md`} key={featureItem.id}>
            <View className="flex-row justify-between items-center mx-3">
              <Text className="text-white font-semibold text-xl">
                {featureItem.title}
              </Text>
              <View className="p-1 rounded-full bg-white">
                <ChevronRightIcon color={"#2894F6"} size={"15"} opacity={0.9} />
              </View>
            </View>
            <View className="flex-row flex-wrap space-x-2 items-center justify-center">
              {featureItem.featureItemList.map((interestingItem) => {
                return (
                  <InterestingFindsCard
                    key={interestingItem.id}
                    id={interestingItem.id}
                    name={interestingItem.name}
                    desc={interestingItem.desc}
                    image={interestingItem.image}
                  />
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
}
