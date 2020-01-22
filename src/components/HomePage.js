import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import Header from "./Header";
import RestroCard from "./RestroCard";
import Footer from "./Footer";

const TestJson = {
  pageName: "Feed Page",
  data: [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
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
      id: "4",
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

function HomePage(props) {
  console.log("here");
  return (
    <View>
      <Header />
      <ScrollView style={styles.base}>
        {TestJson.data.map((item, id) => {
          return (
            <RestroCard
              key={id}
              imgUri={{
                uri: item.dishImage
              }}
              name={item.restaurantName}
              cusions={item.dishName}
              distance={item.distance}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    width: "100%",
    padding: 20,
    marginTop: 60
  }
});

export default HomePage;
