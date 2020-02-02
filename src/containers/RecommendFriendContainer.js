import { connect } from "react-redux";
import RecommendFriend from "../components/RecommendFriend";
import { getAllUser, myRecommendation } from "../actions/Action";

const mapStateToProps = (state, ownProps) => {
  return {
    myRecommendationLoading: state.Reducer.myRecommendationLoading,
    myRecommandationList: state.Reducer.myRecommandationList,
    loginDetails: state.AuthReducer.userLoginDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    myRecommendation: () => {
      return dispatch(myRecommendation());
    }
  };
};

const RecommendFriendContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendFriend);
export default RecommendFriendContainer;
