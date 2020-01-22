import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomePage from "./HomePage";
import Search from "./Search";
import IconComponent from "./IconComponent";
import React from "react";
import homeActiveIcon from "../../assets/fork.png";
import homeNonActiveIcon from "../../assets/fork.png";
import searchIcon from "../../assets/search.png";
import discountIcon from "../../assets/discount.png";
import profileIcon from "../../assets/profile.png";

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomePage,
    Search: Search,
    Account: Search,
    Setting: Search
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName = homeActiveIcon;
        if (routeName === "Home") {
          iconName = focused ? homeActiveIcon : homeNonActiveIcon;
        } else if (routeName === "Search") {
          iconName = focused ? searchIcon : searchIcon;
        } else if (routeName === "Account") {
          iconName = focused ? discountIcon : discountIcon;
        } else if (routeName === "Setting") {
          iconName = focused ? profileIcon : profileIcon;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabNavigator);
