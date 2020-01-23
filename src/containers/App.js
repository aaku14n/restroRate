import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HomePage from "../components/HomePage";

function mapStateToProps(state) {
  return {
    counter: state.counter,
    authReducer: state.authReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
