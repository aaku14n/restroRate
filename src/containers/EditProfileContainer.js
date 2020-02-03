import { connect } from "react-redux";
import EditProfile from "../components/EditProfile";
import { uploadImage, updateProfile } from "../actions/Action";
import { validateUserLogin } from "../actions/AuthAction";

const mapStateToProps = (state, ownProps) => {
  return {
    uploadImageLoading: state.Reducer.uploadImageLoading,
    updateProfileLoading: state.Reducer.updateProfileLoading,
    loginDetails: state.AuthReducer.userLoginDetails.data,
    ...ownProps
  };
};
const mapDispatchToProps = dispatch => {
  return {
    uploadImage: image => {
      return dispatch(uploadImage(image));
    },
    updateProfile: userObj => {
      return dispatch(updateProfile(userObj));
    },
    validateUserLogin: () => {
      return dispatch(validateUserLogin());
    }
  };
};

const EditProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
export default EditProfileContainer;
