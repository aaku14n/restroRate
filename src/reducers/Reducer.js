import * as Actions from "../actions/Action";
const Reducer = (
  state = {
    homeDataLoading: false,
    homeData: "",
    error: ""
  },
  action
) => {
  switch (action.type) {
    case Actions.GET_HOME_DATA_REQUEST:
      return Object.assign({}, state, {
        homeDataLoading: true
      });

    case Actions.GET_HOME_DATA_SUCCESS:
      return Object.assign({}, state, {
        homeDataLoading: false,
        homeData: action.homeData
      });

    case Actions.GET_HOME_DATA_REQUEST:
      return Object.assign({}, state, {
        homeDataLoading: false
      });

    default:
      return state;
  }
};
export default Reducer;
