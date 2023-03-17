import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoryCard({ id, name, image }) {
  return (
    <TouchableOpacity className="items-center mx-1 rounded-md my-1">
      <Image
        source={{ uri: image }}
        alt={name}
        className="w-28 h-28 rounded-md"
      />
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}
