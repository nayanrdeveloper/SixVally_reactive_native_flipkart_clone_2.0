import { View, Text, ScrollView } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  const productList = [
    {
      id: 1,
      name: "POCO M4 5G (Power Black, 64 GB)",
      image:
        "https://rukminim1.flixcart.com/image/312/312/l2jcccw0/mobile/i/1/y/-original-imagdu8gtefvchbn.jpeg?q=70",
      discount: 20,
      rating: 4.5,
      originalPrice: 27900,
      sellPrice: 24999,
    },
    {
      id: 2,
      name: "realme 10 Pro+ 5G (Nebula Blue, 128 GB)  (6 GB RAM)",
      image:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/i/y/j/-original-imagkp8fpw35uygd.jpeg?q=70",
      discount: 45,
      rating: 4.2,
      originalPrice: 25999,
      sellPrice: 24999,
    },
    {
      id: 3,
      name: "Infinix HOT 20 Play (Racing Black, 64 GB)",
      image:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/p/f/u/-original-imagkgrxdsqpdznh.jpeg?q=70",
      discount: 25,
      rating: 3.9,
      originalPrice: 11999,
      sellPrice: 8199,
    },
    {
      id: 4,
      name: "REDMI Note 12 Pro 5G (Glacier Blue, 128 GB) ",
      image:
        "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/j/o/-original-imaghkvue4yjecju.jpeg?q=70",
      discount: 20,
      rating: 4.1,
      originalPrice: 29999,
      sellPrice: 26999,
    },
  ];
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10, paddingLeft: 5 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="space-x-2"
    >
      {productList.map((productItem) => {
        return (
          <ProductCard
            key={productItem.id}
            id={productItem.id}
            name={productItem.name}
            image={productItem.image}
            discount={productItem.discount}
            rating={productItem.rating}
            originalPrice={productItem.originalPrice}
            sellPrice={productItem.sellPrice}
          />
        );
      })}
    </ScrollView>
  );
}
