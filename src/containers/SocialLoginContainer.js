import { connect } from "react-redux";
import { userLogin, guestLogin } from "../actions/AuthAction";
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
    },
    guestLogin: () => {
      return dispatch(guestLogin());
    }
  };
};
const SocialLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLogin);
export default SocialLoginContainer;
