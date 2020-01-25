import { connect } from "react-redux";
import { userLogin, logoutUser } from "../actions/AuthAction";

import Account from "../components/Account";

const mapStateToProps = state => {
  return {
    loginDetails: state.AuthReducer.userLoginDetails,
    reviewList: state.Reducer.homeData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userLogin: userDetailsObject => {
      return dispatch(userLogin(userDetailsObject));
    },
    logoutUser: () => {
      dispatch(logoutUser());
    }
  };
};
const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(Account);
export default AccountContainer;
