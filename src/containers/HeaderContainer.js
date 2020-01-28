import { connect } from "react-redux";

import Header from "../components/Header";
import { getCityName } from "../actions/Action";

const mapStateToProps = (state, ownProps) => {
  return {
    loginDetails: state.AuthReducer.userLoginDetails,
    ...ownProps
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCityName: (lat, long) => {
      return dispatch(getCityName(lat, long));
    }
  };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
