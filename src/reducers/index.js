import { combineReducers } from "redux";
import counter from "./counter";
import AuthReducer from "./AuthReducer";
import Reducer from "./Reducer";
const rootReducer = combineReducers({
  counter,
  AuthReducer,
  Reducer
});

export default rootReducer;
