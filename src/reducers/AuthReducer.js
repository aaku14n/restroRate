import * as AuthActions from "../actions/AuthAction";
import { AsyncStorage } from "react-native";
const AuthReducer = (
  state = {
    userLoginLoading: false,
    userLoginDetails: "",
    userLoginDetailsError: ""
  },
  action
) => {
  console.log(action.type);
  switch (action.type) {
    case AuthActions.USER_LOGIN_REQUEST:
      console.log("request");
      return Object.assign({}, state, {
        userLoginLoading: true
      });
    case AuthActions.USER_LOGIN_SUCCESS:
      console.log("success");
      console.log(action.userDetails);
      AsyncStorage.setItem("userData", JSON.stringify(action.userDetails));
      const userData = AsyncStorage.getItem("userData");
      const data = JSON.parse(userData);
      console.log(data);
      return Object.assign({}, state, {
        userLoginLoading: false,
        userLoginDetails: action.userDetails
      });

    case AuthActions.USER_LOGIN_FAILURE:
      console.log("fail");
      return Object.assign({}, state, {
        userLoginDetailsError: action.error,
        userLoginLoading: false
      });
    default:
      return state;
  }
};
export default AuthReducer;
