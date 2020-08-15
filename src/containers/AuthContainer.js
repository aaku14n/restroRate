import AuthComponent from "../components/AuthComponent";
import { connect } from "react-redux";
import { userLogin } from "../actions/AuthAction";

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
const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthComponent);
export default AuthContainer;
