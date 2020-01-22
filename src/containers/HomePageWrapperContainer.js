import { connect } from "react-redux";
import { userLogin } from "../actions/AuthAction";
import HomePageWrapper from "../components/HomepageWrapper";

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
)(HomePageWrapper);
export default HomePageWrapperContainer;
