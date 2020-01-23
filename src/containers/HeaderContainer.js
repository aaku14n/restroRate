import { connect } from "react-redux";

import Header from "../components/Header";

const mapStateToProps = (state, ownProps) => {
  return {
    loginDetails: state.AuthReducer.userLoginDetails,
    ...ownProps
  };
};

const HeaderContainer = connect(mapStateToProps)(Header);
export default HeaderContainer;
