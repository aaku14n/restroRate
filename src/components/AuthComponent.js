import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomePage from "./HomePage";
import Search from "./Search";
import IconComponent from "./IconComponent";
import AccountContainer from "../containers/AccountContainer";
import React from "react";
import homeIcon from "../../assets/fork.png";
import searchIcon from "../../assets/search.png";
import reviewIcon from "../../assets/review.png";

import profileIcon from "../../assets/profile.png";

import {
  HOME_SCREEN,
  SEARCH_SCREEN,
  ADD_REVIEW_SCREEN,
  ACCOUNT_SCREEN,
  THEME_COLOR
} from "../Constant";

const tabs = {};
tabs[HOME_SCREEN] = HomePage;
tabs[SEARCH_SCREEN] = Search;
tabs[ADD_REVIEW_SCREEN] = Search;
tabs[ACCOUNT_SCREEN] = AccountContainer;

const renderTabBar = navigation => {
  const { routeName } = navigation.state;
  console.log(navigation);
  const { isFocused, tintColor } = navigation;
  const focused = isFocused();
  let iconName = homeIcon;
  if (routeName === HOME_SCREEN) {
    iconName = homeIcon;
  } else if (routeName === SEARCH_SCREEN) {
    iconName = searchIcon;
  } else if (routeName === ADD_REVIEW_SCREEN) {
    iconName = reviewIcon;
  } else if (routeName === ACCOUNT_SCREEN) {
    iconName = profileIcon;
  }

  // You can return any component that you like here!
  console.log(tintColor);
  return (
    <IconComponent
      name={iconName}
      size={25}
      color={focused ? THEME_COLOR : "black"}
    />
  );
};
const TabNavigator = createBottomTabNavigator(tabs, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: renderTabBar(navigation)
    // tabBarVisible: navigation.state.index == 1 ? false : true
  }),

  tabBarOptions: {
    activeTintColor: THEME_COLOR,
    inactiveTintColor: "black"
  }
});

export default createAppContainer(TabNavigator);
