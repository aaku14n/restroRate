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
import { getRestaurantsUrl } from "../utils/Utils";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
  }
  componentDidMount() {
    this.props.getRecentSearches();
  }
  onGotoDetails = id => {
    this.props.navigation.navigate("RestroDetails", {
      restroId: id
    });
  };

  searchText = searchString => {
    this.setState({
      searchString
    });
  };
  onBlurCall = keyword => {
    this.props.searchResults(keyword ? keyword : this.state.searchString);
    this.setState({
      searchString: keyword
    });
  };

  render() {
    const searchResult = this.props.searchResult;
    const recentSearch = this.props.recentSearch;
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
              value={this.state.searchString}
            />
          </View>
          {recentSearch.length > 0 ? (
            <View style={styles.recentSearch}>
              <View>
                <Text style={styles.recentSearchTitle}>Recent Searches</Text>
              </View>
              <ScrollView
                horizontal={true}
                style={styles.imagesWrapper}
                showsHorizontalScrollIndicator={false}
              >
                {recentSearch.map((recent, id) => {
                  return (
                    <TouchableWithoutFeedback
                      style={styles.imageTitleWrapper}
                      onPress={() => this.onBlurCall(recent.keyword)}
                      key={id}
                    >
                      <Image
                        key={id}
                        style={styles.image}
                        source={
                          recent.type === "Dish"
                            ? recent.dishImage
                              ? {
                                  uri: recent.dishImage
                                }
                              : require("../../assets/defaultRestro.png")
                            : recent.dishImage
                            ? {
                                uri: getRestaurantsUrl(recent.dishImage)
                              }
                            : require("../../assets/defaultRestro.png")
                        }
                      />
                      <Text style={styles.title}>{recent.name}</Text>
                    </TouchableWithoutFeedback>
                  );
                })}
              </ScrollView>
            </View>
          ) : null}

          {this.props.searchLoading ? (
            <View style={styles.recommendWrapper}>
              <ActivityIndicator size="large" color="#c4c4c4" />
            </View>
          ) : (
            <View style={styles.recommendWrapper}>
              <View>
                {searchResult.dishes.length == 0 &&
                searchResult.restaurants.length == 0 ? (
                  <Text style={styles.recentSearchTitle}>
                    Sorry, No Recomendation based on your search
                  </Text>
                ) : (
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
                        onPress={() =>
                          this.onGotoDetails(recent.restaurantInfo._id)
                        }
                        rating={recent.averageRating}
                        peoples={recent.totalReviews}
                        subHeading={recent.restaurantInfo.name}
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
                        imgUri={getRestaurantsUrl(recent.restaurantImage)}
                        name={recent.name}
                        onPress={() => this.onGotoDetails(recent._id)}
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
