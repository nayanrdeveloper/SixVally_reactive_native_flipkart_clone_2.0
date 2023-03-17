import { View, Text } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const categoryList = [
    {
      id: 1,
      name: "Mobile",
      image: "https://sathya.in/media/3420/catalog/mobiles.jpg",
    },
    {
      id: 2,
      name: "Electronics",
      image:
        "https://omshreestores.com/wp-content/uploads/2020/07/ELECTRONIC-ITEMS.jpg",
    },
    {
      id: 3,
      name: "Kids",
      image:
        "https://cdn.firstcry.com/education/2022/11/06094158/Toy-Names-For-Kids.jpg",
    },
    {
      id: 4,
      name: "Clothes",
      image:
        "https://images.ctfassets.net/3s5io6mnxfqz/3N5iXB8yNlqVQS3xWdIIgX/fa0d654680fbd64eb5852dbbbcf4cca4/AdobeStock_303371265.jpeg",
    },
    {
      id: 5,
      name: "Books",
      image:
        "https://thumbs.dreamstime.com/b/open-book-hardback-books-wooden-table-education-background-back-to-school-copy-space-text-76106466.jpg",
    },
    {
      id: 6,
      name: "Home Accessories",
      image:
        "https://images.hindustantimes.com/img/2022/12/15/550x309/spacejoy-YI2YkyaREHk-unsplash_1671112806479_1671112828103_1671112828103.jpg",
    },
    {
      id: 7,
      name: "Jewelry",
      image:
        "https://cdn.shopify.com/s/files/1/2196/3271/files/1-1_1024x1024.jpg?v=1549284501",
    },
    {
      id: 8,
      name: "Cars Accessories",
      image:
        "https://www.mycarhelpline.com/images/easyblog_articles/570/Car-Accessories.jpg",
    },
  ];
  return (
    <View className="flex-row  flex-wrap">
      {categoryList.map((categoryItem) => {
        return (
          <CategoryCard
            key={categoryItem.id}
            id={categoryItem.id}
            name={categoryItem.name}
            image={categoryItem.image}
          />
        );
      })}
    </View>
  );
}
