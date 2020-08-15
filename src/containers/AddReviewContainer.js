import { connect } from "react-redux";
import AddReviewForm from "../components/AddReviewForm";
import {
  submitReview,
  getRestaurant,
  uploadImage,
  getAllUser,
  sendRecommandation,
  getHomeData,
  myRecommendation,
  getCurrentLocation,
  myAccountReviews
} from "../actions/Action";

const mapStateToProps = (state, ownProps) => {
  return {
    addReviewLoading: state.Reducer.addReviewLoading,
    uploadImageLoading: state.Reducer.uploadImageLoading,
    addReview: state.Reducer.addReview,
    userList: state.Reducer.userList,
    sendRecommendationLoading: state.Reducer.sendRecommendationLoading,
    recommandationResponse: state.Reducer.recommandationResponse,
    lat: state.Reducer.lat,
    long: state.Reducer.long,
    locationLoading: state.Reducer.locationLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitReview: reviewObj => {
      return dispatch(submitReview(reviewObj));
    },
    getRestaurant: (loc, query) => {
      return dispatch(getRestaurant(loc, query));
    },
    uploadImage: image => {
      return dispatch(uploadImage(image));
    },
    getAllUser: () => {
      return dispatch(getAllUser());
    },
    sendRecommandation: recommedObj => {
      return dispatch(sendRecommandation(recommedObj));
    },
    getHomeData: (lat, long) => {
      return dispatch(getHomeData(lat, long));
    },
    myRecommendation: () => {
      return dispatch(myRecommendation());
    },
    getCurrentLocation: () => {
      return dispatch(getCurrentLocation());
    },
    myAccountReviews: () => {
      return dispatch(myAccountReviews());
    }
  };
};

const AddReviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReviewForm);
export default AddReviewContainer;
