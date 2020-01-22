import React, { useState } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
class SearchComponent extends React.Component {
  render() {
    return (
      <View>
        <Text>Search</Text>
        <Text
          style={{ margin: 20, fontSize: 20 }}
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        >
          Click here
        </Text>
      </View>
    );
  }
}
function MyNotificationsScreen() {
  return <Text>Natifiaction </Text>;
}
const AppNavigator = createStackNavigator({
  SettingScreen: { screen: SearchComponent },
  HomeScreen: { screen: MyNotificationsScreen }
});

// const Search = createAppContainer(MyDrawerNavigator);
export default AppNavigator;
