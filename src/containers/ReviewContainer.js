import { connect } from "react-redux";
import ReviewComponent from "../components/General/ReviewComponent";
import {
  getAllUser,
  sendRecommandation,
  myRecommendation
} from "../actions/Action";

const mapStateToProps = state => {
  return {
    userList: state.Reducer.userList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllUser: () => {
      return dispatch(getAllUser());
    },
    sendRecommandation: recommedObj => {
      return dispatch(sendRecommandation(recommedObj));
    },
    myRecommendation: () => {
      return dispatch(myRecommendation());
    }
  };
};
const ReviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewComponent);
export default ReviewContainer;
