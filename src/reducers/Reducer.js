import * as Actions from "../actions/Action";
const Reducer = (
  state = {
    homeDataLoading: false,
    homeData: "",
    error: "",
    addReviewLoading: false,
    addReview: "",
    reviewError: ""
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
    case Actions.ADD_REVIEW_REQUEST:
      return Object.assign({}, state, {
        addReviewLoading: true
      });

    case Actions.ADD_REVIEW_SUCCESS:
      return Object.assign({}, state, {
        addReviewLoading: false,
        addReview: action.addReview
      });

    case Actions.ADD_REVIEW_FAILURE:
      return Object.assign({}, state, {
        addReviewLoading: false
      });

    default:
      return state;
  }
};
export default Reducer;
