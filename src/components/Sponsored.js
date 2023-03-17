import { View, Text } from "react-native";
import React from "react";
import SponsoredCard from "./SponsoredCard";

export default function Sponsored() {
  const sponsoredList = [
    {
      id: 1,
      name: "Watch 2 Sports",
      price: 1299,
      image:
        "https://fdn.gsmarena.com/imgroot/news/21/09/dizo-watch2-watchpro-announced/popup/-1540x1073m/gsmarena_003.jpg",
    },
    {
      id: 2,
      name: "42 Hrs Playtime",
      price: 899,
      image:
        "https://www.onmartindia.com/wp-content/uploads/2022/09/Mivi-1.webp",
    },
    {
      id: 3,
      name: "AMOLED + Calling",
      price: 2499,
      image:
        "https://www.jiomart.com/images/product/420x420/rvgowr7uus/noise-wrb-sw-colorfitultra2-std-blk_blk-jet-black-colorfit-ultra-2-smart-watch-with-1-78inch-amoled-display-product-images-orvgowr7uus-p593318421-2-202208011031.jpg",
    },
    {
      id: 4,
      name: "BT calling | 1.85",
      price: 1199,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtzkucqqlkOeK7YKF1Tfh6A2xoBZtoT5sZQ&usqp=CAU",
    },
    {
      id: 5,
      name: "BT calling | 1.85",
      price: 1499,
      image:
        "https://www.jiomart.com/images/product/420x420/492850574/ambrane-wise-spirit-smart-watch-with-bluetooth-calling-fern-green-digital-o492850574-p592040042-0-202206102214.jpeg",
    },
    {
      id: 6,
      name: "1.3 Curved Glass",
      price: 1799,
      image:
        "https://www.jiomart.com/images/product/420x420/492849706/fire-bolt-call-smart-watch-with-bluetooth-calling-ip67-water-resistant-white-grey-digital-o492849706-p591225865-1-202204292311.jpeg",
    },
  ];
  return (
    <View className="flex-row flex-wrap">
      {sponsoredList.map((sponsoredItem) => {
        return (
          <SponsoredCard
            key={sponsoredItem.id}
            name={sponsoredItem.name}
            price={sponsoredItem.price}
            image={sponsoredItem.image}
          />
        );
      })}
    </View>
  );
}
