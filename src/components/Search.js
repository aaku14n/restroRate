import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  ActivityIndicator
} from "react-native";
import styles from "./css/SearchStyle";
import ListItemComponent from "./ListItemComponent";
import HeaderContainer from "../containers/HeaderContainer";

const TestJson = {
  data: [
    {
      id: "1",
      dishImage:
        "https://img.jakpost.net/c/2017/02/24/2017_02_24_22239_1487924367._large.jpg",

      name: "Susi",
      rating: 2,
      price: "$23.55",
      peoples: 200
    },
    {
      id: "2",

      dishImage:
        "https://c-lj.gnst.jp/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20180116120327",

      name: "Indian",
      rating: 2.5,
      price: "$20.55",
      peoples: 200
    },
    {
      id: "3",

      dishImage:
        "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2000,w_3000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_365954354_nghgkk.jpg",

      name: "Chiense",
      rating: 3.5,
      price: "$23.55",
      peoples: 200
    },
    {
      id: "4",

      dishImage:
        "https://img.jakpost.net/c/2017/02/24/2017_02_24_22239_1487924367._large.jpg",

      name: "Itelian",
      rating: 3,
      price: "$23.55",
      peoples: 200
    },
    {
      id: "5",
      dishImage: "",
      name: "Itelian",
      rating: 3,
      price: "$23.55",
      peoples: 200
    }
  ]
};
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
  }
  onGotoDetails = id => {
    this.props.navigation.navigate("RestroDetails");
  };

  searchText = searchString => {
    this.setState({
      searchString
    });
  };
  onBlurCall = () => {
    this.props.searchResults(this.state.searchString);
  };
  render() {
    const searchResult = this.props.searchResult;
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
              onChangeText={text => this.searchText(text)}
              onBlur={() => this.onBlurCall()}
              value={this.state.restroName}
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
                      source={
                        recent.dishImage
                          ? {
                              uri: recent.dishImage
                            }
                          : require("../../assets/defaultRestro.png")
                      }
                    />
                    <Text style={styles.title}>{recent.name}</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          {this.props.searchLoading ? (
            <View style={styles.recommendWrapper}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <View style={styles.recommendWrapper}>
              <View>
                {searchResult.dishes && searchResult.restaurants && (
                  <Text style={styles.recentSearchTitle}>
                    Recomendation based on your search
                  </Text>
                )}
              </View>
              <ScrollView style={styles.listItemWrapper}>
                {searchResult &&
                searchResult.dishes &&
                searchResult.dishes.map ? (
                  searchResult.dishes.map((recent, id) => {
                    return (
                      <ListItemComponent
                        key={id}
                        imgUri={recent.dishImage}
                        name={recent.name}
                        onPress={this.onGotoDetails}
                        rating={recent.averageRating}
                        peoples={recent.totalReviews}
                      />
                    );
                  })
                ) : (
                  <Text />
                )}
                {searchResult &&
                searchResult.restaurants &&
                searchResult.restaurants.map ? (
                  searchResult.restaurants.map((recent, id) => {
                    return (
                      <ListItemComponent
                        key={id}
                        imgUri={recent.restaurantImage}
                        name={recent.name}
                        onPress={this.onGotoDetails}
                        rating={recent.averageRating}
                        peoples={recent.totalReviews}
                      />
                    );
                  })
                ) : (
                  <Text />
                )}
              </ScrollView>
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

export default Search;
