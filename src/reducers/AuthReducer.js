import * as AuthActions from "../actions/AuthAction";
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
    default:
      return state;
  }
};
export default AuthReducer;
