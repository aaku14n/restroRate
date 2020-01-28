import { connect } from "react-redux";
import { getRestoDetail } from "../actions/Action";
import RestroDetailsComponent from "../components/RestroDetailComponent";

const mapStateToProps = (state, ownProps) => {
  return {
    getRestroDetails: state.Reducer.getRestroDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    restroDetails: id => {
      return dispatch(getRestoDetail(id));
    }
  };
};

const RestroDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestroDetailsComponent);
export default RestroDetailContainer;
