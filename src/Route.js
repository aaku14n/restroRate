import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomePage from "./components/HomePage";
import Header from "./components/Header";

const AppNavigator = createStackNavigator(
  {
    Home: HomePage,
    Details: Header
  },
  {
    initialRouteName: "Home"
  }
);

export default RouteNavigation = createAppContainer(AppNavigator);
