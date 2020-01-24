import { connect } from "react-redux";
import AddReviewForm from "../components/AddReviewForm";

const mapStateToProps = (state, ownProps) => {
  return {
    loginDetails: state.AuthReducer.userLoginDetails,
    ...ownProps
  };
};

const AddReviewContainer = connect(mapStateToProps)(AddReviewForm);
export default AddReviewContainer;
