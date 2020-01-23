import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomePage from "./HomePage";
import Search from "./Search";
import IconComponent from "./IconComponent";
import AccountContainer from "../containers/AccountContainer";
import React from "react";
import homeIcon from "../../assets/fork.png";
import homeActiveIcon from "../../assets/forkActive.png";
import searchIcon from "../../assets/search.png";
import searchActiveIcon from "../../assets/searchActive.png";
import reviewIcon from "../../assets/review.png";
import reviewActiveIcon from "../../assets/reviewActive.png";
import profileIcon from "../../assets/profile.png";
import profileActiveIcon from "../../assets/profileActive.png";
import {
  HOME_SCREEN,
  SEARCH_SCREEN,
  ADD_REVIEW_SCREEN,
  ACCOUNT_SCREEN
} from "../Constant";

const tabs = {};
tabs[HOME_SCREEN] = HomePage;
tabs[SEARCH_SCREEN] = Search;
tabs[ADD_REVIEW_SCREEN] = Search;
tabs[ACCOUNT_SCREEN] = AccountContainer;
const TabNavigator = createBottomTabNavigator(tabs, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;

      let iconName = homeActiveIcon;
      if (routeName === HOME_SCREEN) {
        iconName = focused ? homeActiveIcon : homeIcon;
      } else if (routeName === SEARCH_SCREEN) {
        iconName = focused ? searchActiveIcon : searchIcon;
      } else if (routeName === ADD_REVIEW_SCREEN) {
        iconName = focused ? reviewActiveIcon : reviewIcon;
      } else if (routeName === ACCOUNT_SCREEN) {
        iconName = focused ? profileActiveIcon : profileIcon;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    }
  }),
  tabBarOptions: {
    activeTintColor: "#fdd835",
    inactiveTintColor: "black"
  }
});

export default createAppContainer(TabNavigator);
