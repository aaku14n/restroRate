import { createStackNavigator } from "react-navigation-stack";
import AccountContainer from "../containers/AccountContainer";
import EditProfileContainer from "../containers/EditProfileContainer";
import AccountReviewScreen from "./AccountReviewScreen";

const AccountPage = createStackNavigator({
  AccountScreen: {
    screen: AccountContainer,
    navigationOptions: {
      headerShown: false
    }
  },
  EditScreen: {
    screen: EditProfileContainer,
    navigationOptions: {
      headerShown: false
    }
  },
  ReviewScreen: {
    screen: AccountReviewScreen,
    navigationOptions: {
      headerShown: false
    }
  }
});

export default AccountPage;
