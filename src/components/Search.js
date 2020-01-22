import React, { useState } from "react";
import { Text, View, TextInput, Image, ScrollView } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import styles from "./css/SearchStyle";
import Header from "./Header";
import searchIcon from "../../assets/search.png";

function SearchComponent() {
  return (
    <View style={styles.base}>
      <View style={styles.header}>
        <Header />
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
          <ScrollView style={styles.imagesWrapper}>
            <Image
              style={styles.image}
              source={require("../../assets/profilePic.png")}
            />
          </ScrollView>
        </View>
      </View>
      {/* <Text>Search</Text>
        <Text
          style={{ margin: 20, fontSize: 20 }}
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        >
          Click here
        </Text> */}
    </View>
  );
}
function MyNotificationsScreen() {
  return <Text>Natifiaction </Text>;
}
const AppNavigator = createStackNavigator({
  SearchScreen: { screen: SearchComponent },
  HomeScreen: { screen: MyNotificationsScreen }
});
const Search = createAppContainer(AppNavigator);

export default Search;
