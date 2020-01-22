import { connect } from "react-redux";
import { userLogin } from "../actions/AuthAction";
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
    }
  };
};
const HomePageWrapperContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthHomeWrapper);
export default HomePageWrapperContainer;
