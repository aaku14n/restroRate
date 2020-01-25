import { connect } from "react-redux";
import AddReviewForm from "../components/AddReviewForm";
import { submitReview } from "../actions/Action";

const mapStateToProps = (state, ownProps) => {
  return {
    addReviewLoading: state.Reducer.addReviewLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitReview: reviewObj => {
      return dispatch(submitReview(reviewObj));
    }
  };
};

const AddReviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReviewForm);
export default AddReviewContainer;
