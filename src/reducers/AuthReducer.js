import * as AuthActions from "../actions/AuthAction";
import { UPDATE_PROFILE_SUCCESS } from "../actions/Action";
const AuthReducer = (
  state = {
    userLoginLoading: false,
    userLoginDetails: "",
    userLoginDetailsError: ""
  },
  action
) => {
  switch (action.type) {
    case AuthActions.USER_LOGIN_REQUEST:
      return Object.assign({}, state, {
        userLoginLoading: true
      });
    case AuthActions.USER_LOGIN_SUCCESS:
    case AuthActions.USER_LOGGED_IN:
      return Object.assign({}, state, {
        userLoginLoading: false,
        userLoginDetails: action.userDetails
      });

    case AuthActions.USER_LOGIN_FAILURE:
      return Object.assign({}, state, {
        userLoginDetailsError: action.error,
        userLoginLoading: false
      });
    case AuthActions.LOG_OUT_USER:
      return Object.assign({}, state, {
        userLoginDetails: ""
      });
    case UPDATE_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        userLoginLoading: false,
        userLoginDetails: action.updateProfileResponse
      });
    default:
      return state;
  }
};
export default AuthReducer;
