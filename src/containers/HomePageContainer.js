import { connect } from "react-redux";
import HomePageComponent from "../components/HomePageComponent";
import { getHomeData } from "../actions/Action";

const mapStateToProps = (state, ownProps) => {
  return {
    loginDetails: state.AuthReducer.userLoginDetails,
    ...ownProps,
    homeData: state.Reducer.homeData,
    homeDataLoading: state.Reducer.homeDataLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHomeData: () => {
      dispatch(getHomeData());
    }
  };
};

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);
export default HomePageContainer;
