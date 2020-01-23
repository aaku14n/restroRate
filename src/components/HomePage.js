import React from "react";

import RestroDetailsComponent from "./RestroDetailComponent";
import { createStackNavigator } from "react-navigation-stack";

import HomePageContainer from "../containers/HomePageContainer";
const HomePage = createStackNavigator({
  SettingScreen: {
    screen: HomePageContainer,
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

export default HomePage;
