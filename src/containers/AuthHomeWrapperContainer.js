import { connect } from "react-redux";
import { userLogin, validateUserLogin } from "../actions/AuthAction";
import AuthHomeWrapper from "../components/AuthHomeWrapper";
import { getCurrentLocation } from "../actions/Action";

const mapStateToProps = state => {
  return {
    loginDetails: state.AuthReducer.userLoginDetails,
    lat: state.Reducer.lat,
    long: state.Reducer.long,
    locationLoading: state.Reducer.locationLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userLogin: userDetailsObject => {
      return dispatch(userLogin(userDetailsObject));
    },
    validateUserLogin: () => {
      dispatch(validateUserLogin());
    },
    getCurrentLocation: () => {
      return dispatch(getCurrentLocation());
    }
  };
};
const HomePageWrapperContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthHomeWrapper);
export default HomePageWrapperContainer;
