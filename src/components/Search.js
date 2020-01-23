import React, { useState } from "react";
import { Text, View, TextInput, Image, ScrollView } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import styles from "./css/SearchStyle";
import Header from "./Header";
import ListItemComponent from "./ListItemComponent";
import searchIcon from "../../assets/search.png";
import HeaderContainer from "../containers/HeaderContainer";
import RestroDetailsComponent from "./RestroDetailComponent";

const TestJson = {
  data: [
    {
      id: "1",
      dishImage:
        "https://img.jakpost.net/c/2017/02/24/2017_02_24_22239_1487924367._large.jpg",

      name: "Susi",
      rating: 2
    },
    {
      id: "2",

      dishImage:
        "https://c-lj.gnst.jp/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20180116120327",

      name: "Indian",
      rating: 2.5
    },
    {
      id: "3",

      dishImage:
        "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2000,w_3000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_365954354_nghgkk.jpg",

      name: "Chiense",
      rating: 3.5
    },
    {
      id: "4",

      dishImage:
        "https://img.jakpost.net/c/2017/02/24/2017_02_24_22239_1487924367._large.jpg",

      name: "Itelian",
      rating: 3
    }
  ]
};

function SearchComponent(props) {
  const onGotoDetails = id => {
    props.navigation.navigate("RestroDetails");
  };
  return (
    <ScrollView style={styles.base} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <HeaderContainer />
      </View>
      <View style={styles.subBase}>
        <View style={styles.searchInput}>
          <TextInput
            style={styles.input}
            placeholder="Search restaurants or Cuisines"
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.recentSearch}>
          <View>
            <Text style={styles.recentSearchTitle}>Recent Searches</Text>
          </View>
          <ScrollView
            horizontal={true}
            style={styles.imagesWrapper}
            showsHorizontalScrollIndicator={false}
          >
            {TestJson.data.map((recent, id) => {
              return (
                <View style={styles.imageTitleWrapper}>
                  <Image
                    key={id}
                    style={styles.image}
                    source={{
                      uri: recent.dishImage
                    }}
                  />
                  <Text style={styles.title}>{recent.name}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.recommendWrapper}>
          <View>
            <Text style={styles.recentSearchTitle}>
              Recomendation based on your search
            </Text>
          </View>
          <ScrollView style={styles.listItemWrapper}>
            {TestJson.data.map((recent, id) => {
              return (
                <ListItemComponent
                  key={id}
                  imgUri={recent.dishImage}
                  name={recent.name}
                  onPress={onGotoDetails}
                  rating={recent.rating}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
function MyNotificationsScreen() {
  return <Text>Natifiaction </Text>;
}
const AppNavigator = createStackNavigator({
  SearchScreen: {
    screen: SearchComponent,
    navigationOptions: {
      headerShown: false
    }
  },
  RestroDetails: {
    screen: RestroDetailsComponent,
    navigationOptions: {
      headerShown: false
    }
  }
});
const Search = createAppContainer(AppNavigator);

export default Search;
