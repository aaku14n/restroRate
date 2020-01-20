import { connect } from "react-redux";
import { userLogin } from "../actions/AuthAction";
import AuthLogin from "../components/AuthLogin";

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
const SocialLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLogin);
export default SocialLoginContainer;
