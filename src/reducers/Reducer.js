import * as Actions from "../actions/Action";
const Reducer = (
  state = {
    homeDataLoading: false,
    homeData: "",
    error: "",

    addReviewLoading: false,
    addReview: "",
    reviewError: "",

    searchLoading: false,
    searchResult: "",
    searchError: "",

    uploadImageLoading: false,
    uploadImage: "",
    uploadError: "",

    recentSearchLoading: false,
    recentSearch: "",
    recentSearchError: "",

    getRestroDetailLoading: false,
    getRestroDetails: "",
    getRestroDetailError: ""
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
    case Actions.SEARCH_REQUEST:
      return Object.assign({}, state, {
        searchLoading: true
      });

    case Actions.SEARCH_SUCCESS:
      return Object.assign({}, state, {
        searchLoading: false,
        searchResult: action.searchResult
      });

    case Actions.SEARCH_FAILURE:
      return Object.assign({}, state, {
        searchLoading: false
      });
    case Actions.UPLOAD_IMAGE_REQUEST:
      return Object.assign({}, state, {
        uploadImageLoading: true
      });

    case Actions.UPLOAD_IMAGE_SUCCESS:
      return Object.assign({}, state, {
        uploadImageLoading: false,
        uploadImage: action.imageInfo
      });

    case Actions.UPLOAD_IMAGE_FAILURE:
      return Object.assign({}, state, {
        uploadImageLoading: false
      });
    case Actions.RECENT_SEARCH_REQUEST:
      return Object.assign({}, state, {
        recentSearchLoading: true
      });
    case Actions.RECENT_SEARCH_SUCCESS:
      return Object.assign({}, state, {
        recentSearchLoading: false,
        recentSearch: action.recentSearch
      });

    case Actions.RECENT_SEARCH_FAILURE:
      return Object.assign({}, state, {
        recentSearchLoading: false
      });
    case Actions.GET_RESTRO_REQUEST:
      return Object.assign({}, state, {
        getRestroDetailLoading: true
      });
    case Actions.GET_RESTRO_SUCCESS:
      return Object.assign({}, state, {
        getRestroDetailLoading: false,
        getRestroDetails: action.getRestroDetails
      });

    case Actions.GET_RESTRO_FAILURE:
      return Object.assign({}, state, {
        getRestroDetailLoading: false
      });

    default:
      return state;
  }
};
export default Reducer;
