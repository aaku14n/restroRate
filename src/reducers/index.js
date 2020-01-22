import { combineReducers } from "redux";
import counter from "./counter";
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
  counter,
  AuthReducer
});

export default rootReducer;
