import { connect } from "react-redux";

import Header from "../components/Header";
import { getCityName, getCurrentLocation } from "../actions/Action";

const mapStateToProps = (state, ownProps) => {
  return {
    loginDetails: state.AuthReducer.userLoginDetails,
    lat: state.Reducer.lat,
    long: state.Reducer.long,
    ...ownProps
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCityName: (lat, long) => {
      return dispatch(getCityName(lat, long));
    },
    getCurrentDirection: () => {
      return dispatch(getCurrentLocation());
    }
  };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
