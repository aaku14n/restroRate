import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import RestroCard from "./RestroCard";

const TestJson = {
  pageName: "Feed Page",
  data: [
    {
      id: "221cb8b8-4812-4fa7-a0a6-f1752e4f206c",
      restaurantName: "Sanraku",
      restaurantImage:
        "https://c8.alamy.com/comp/BDE787/dummy-or-manikin-holding-a-menu-outside-the-village-restaurant-in-BDE787.jpg",
      dishName: "Japanese, Sushi Bars, Asian Fusion",
      dishImage:
        "https://img.jakpost.net/c/2017/02/24/2017_02_24_22239_1487924367._large.jpg",
      ratings: 4.5,
      distance: 0.4,
      totalReviews: 132,
      cost: 500
    },
    {
      id: "221cb8b8-4812-4fa7-a0a6-f1752e4f206c",
      restaurantName: "Sushi Special",
      restaurantImage:
        "https://c8.alamy.com/comp/BDE787/dummy-or-manikin-holding-a-menu-outside-the-village-restaurant-in-BDE787.jpg",
      dishName: "Japanese, Sushi Bars, Asian Fusion",
      dishImage:
        "https://c-lj.gnst.jp/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20180116120327",
      ratings: 4.5,
      distance: 0.4,
      totalReviews: 132,
      cost: 500
    },
    {
      id: "221cb8b8-4812-4fa7-a0a6-f1752e4f206c",
      restaurantName: "Tsubasa Sushi",
      restaurantImage:
        "https://c8.alamy.com/comp/BDE787/dummy-or-manikin-holding-a-menu-outside-the-village-restaurant-in-BDE787.jpg",
      dishName: "Japanese, Sushi Bars, Asian Fusion",
      dishImage:
        "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2000,w_3000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_365954354_nghgkk.jpg",
      ratings: 4.5,
      distance: 0.4,
      totalReviews: 132,
      cost: 500
    },
    {
      id: "221cb8b8-4812-4fa7-a0a6-f1752e4f206c",
      restaurantName: "Sanraku",
      restaurantImage:
        "https://c8.alamy.com/comp/BDE787/dummy-or-manikin-holding-a-menu-outside-the-village-restaurant-in-BDE787.jpg",
      dishName: "Japanese, Sushi Bars, Asian Fusion",
      dishImage:
        "https://img.jakpost.net/c/2017/02/24/2017_02_24_22239_1487924367._large.jpg",
      ratings: 4.5,
      distance: 0.4,
      totalReviews: 132,
      cost: 500
    }
  ]
};

function homePage(props) {
  return (
    <View style={styles.base}>
      <Header />
      {TestJson.data.map((item, id) => {
        return (
          <RestroCard
            imgUri={{
              uri: item.dishImage
            }}
            name={item.restaurantName}
            cusions={item.dishName}
            distance={item.distance}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    width: "100%",
    padding: "20px"
  }
});

export default homePage;
