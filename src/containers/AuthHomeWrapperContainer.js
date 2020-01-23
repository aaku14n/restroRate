import { connect } from "react-redux";
import { userLogin, validateUserLogin } from "../actions/AuthAction";
import AuthHomeWrapper from "../components/AuthHomeWrapper";

const mapStateToProps = state => {
  return {
    loginDetails: state.AuthReducer.userLoginDetails
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userLogin: userDetailsObject => {
      return dispatch(userLogin(userDetailsObject));
    },
    validateUserLogin: () => {
      dispatch(validateUserLogin());
    }
  };
};
const HomePageWrapperContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthHomeWrapper);
export default HomePageWrapperContainer;
