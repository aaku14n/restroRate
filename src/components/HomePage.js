import React from "react";

import RestroDetailsComponent from "./RestroDetailComponent";
import { createStackNavigator } from "react-navigation-stack";

import HomePageContainer from "../containers/HomePageContainer";
const HomePage = createStackNavigator({
  SettingScreen: {
    screen: HomePageContainer,
    navigationOptions: {
      header: null
    }
  },
  RestroDetails: {
    screen: RestroDetailsComponent,
    navigationOptions: {
      header: null,
      tabBarVisible: false
    }
  }
});

export default HomePage;
