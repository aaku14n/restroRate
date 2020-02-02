import { connect } from "react-redux";
import { userLogin, logoutUser } from "../actions/AuthAction";
import Account from "../components/Account";
import { myAccountReviews } from "../actions/Action";

const mapStateToProps = state => {
  return {
    loginDetails: state.AuthReducer.userLoginDetails,
    reviewList: state.Reducer.myAccountReview
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userLogin: userDetailsObject => {
      return dispatch(userLogin(userDetailsObject));
    },
    logoutUser: () => {
      dispatch(logoutUser());
    },
    myAccountReviews: () => {
      return dispatch(myAccountReviews());
    }
  };
};
const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(Account);
export default AccountContainer;
