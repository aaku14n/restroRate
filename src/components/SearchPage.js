import RestroDetailContainer from "../containers/RestroDetailContainer";
import RecommendScreen from "../containers/RecommendFriendContainer";
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
    screen: RestroDetailContainer,
    navigationOptions: {
      headerShown: false
    }
  },
  RecommendScreen: {
    screen: RecommendScreen,
    navigationOptions: {
      headerShown: false
    }
  }
});

export default SearchPage;
