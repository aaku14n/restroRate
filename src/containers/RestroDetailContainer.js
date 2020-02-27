import { connect } from "react-redux";
import {
  getRestoDetail,
  getAllUser,
  sendRecommandation,
  myRecommendation
} from "../actions/Action";
import RestroDetailsComponent from "../components/RestroDetailComponent";

const mapStateToProps = (state, ownProps) => {
  return {
    getRestroDetails: state.Reducer.getRestroDetails,
    getRestroDetailLoading: state.Reducer.getRestroDetailLoading,
    userList: state.Reducer.userList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    restroDetails: id => {
      return dispatch(getRestoDetail(id));
    },

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

const RestroDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestroDetailsComponent);
export default RestroDetailContainer;
