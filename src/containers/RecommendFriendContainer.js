import { connect } from "react-redux";
import RecommendFriend from "../components/RecommendFriend";
import { getAllUser } from "../actions/Action";

const mapStateToProps = (state, ownProps) => {
  return {
    userList: state.Reducer.userList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllUser: () => {
      return dispatch(getAllUser());
    }
  };
};

const RecommendFriendContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendFriend);
export default RecommendFriendContainer;
