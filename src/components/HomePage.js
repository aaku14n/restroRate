import RestroDetailContainer from "../containers/RestroDetailContainer";
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
    screen: RestroDetailContainer,
    navigationOptions: {
      headerShown: false
    }
  }
});

export default HomePage;
