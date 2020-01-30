import { connect } from "react-redux";
import AddReviewForm from "../components/AddReviewForm";
import {
  submitReview,
  getRestaurant,
  uploadImage,
  getAllUser
} from "../actions/Action";

const mapStateToProps = (state, ownProps) => {
  return {
    addReviewLoading: state.Reducer.addReviewLoading,
    uploadImageLoading: state.Reducer.uploadImageLoading,
    addReview: state.Reducer.addReview,
    userList: state.Reducer.userList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitReview: reviewObj => {
      return dispatch(submitReview(reviewObj));
    },
    getRestaurant: loc => {
      return dispatch(getRestaurant(loc));
    },
    uploadImage: image => {
      return dispatch(uploadImage(image));
    },
    getAllUser: () => {
      return dispatch(getAllUser());
    }
  };
};

const AddReviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReviewForm);
export default AddReviewContainer;
