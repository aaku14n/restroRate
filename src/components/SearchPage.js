import RestroDetailsComponent from "./RestroDetailComponent";
import { createStackNavigator } from "react-navigation-stack";
import SearchContainer from "../containers/SearchContainer";

const SearchPage = createStackNavigator({
  SearchScreen: {
    screen: SearchContainer,
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

export default SearchPage;
