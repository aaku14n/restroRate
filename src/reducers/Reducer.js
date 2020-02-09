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
    getRestroDetailError: "",

    userListLoading: false,
    userList: "",
    userListError: "",

    sendRecommendationLoading: false,
    recommandationResponse: "",
    recommandtionError: "",

    myRecommendationLoading: false,
    myRecommandationList: "",
    myRecommandationError: "",

    myAccountReviewLoading: false,
    myAccountReview: "",
    myAccountReviewError: "",

    updateProfileLoading: false,
    updateProfileResponse: "",
    updateProfileError: "",

    lat: "",
    long: "",
    locationLoading: false
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

    case Actions.ALL_USER_REQUEST:
      return Object.assign({}, state, {
        userListLoading: true
      });
    case Actions.ALL_USER_SUCCESS:
      return Object.assign({}, state, {
        userListLoading: false,
        userList: action.userList
      });

    case Actions.ALL_USER_FAILURE:
      return Object.assign({}, state, {
        userListLoading: false
      });
    case Actions.SEND_RECOMMEND_REQUEST:
      return Object.assign({}, state, {
        sendRecommendationLoading: true
      });
    case Actions.SEND_RECOMMEND_SUCCESS:
      return Object.assign({}, state, {
        sendRecommendationLoading: false,
        recommandationResponse: action.sendRecommandation
      });

    case Actions.SEND_RECOMMEND_FAILURE:
      return Object.assign({}, state, {
        sendRecommendationLoading: false
      });
    case Actions.MY_RECOMMEND_REQUEST:
      return Object.assign({}, state, {
        myRecommendationLoading: true
      });
    case Actions.MY_RECOMMEND_SUCCESS:
      return Object.assign({}, state, {
        myRecommendationLoading: false,
        myRecommandationList: action.myRecommandation
      });

    case Actions.MY_RECOMMEND_FAILURE:
      return Object.assign({}, state, {
        myRecommendationLoading: false
      });
    case Actions.MY_REVIEW_REQUEST:
      return Object.assign({}, state, {
        myAccountReviewLoading: true
      });
    case Actions.MY_REVIEW_SUCCESS:
      return Object.assign({}, state, {
        myAccountReviewLoading: false,
        myAccountReview: action.myAccountReview
      });

    case Actions.MY_REVIEW_FAILURE:
      return Object.assign({}, state, {
        myAccountReviewLoading: false
      });
    case Actions.UPDATE_PROFILE_REQUEST:
      return Object.assign({}, state, {
        updateProfileLoading: true
      });
    case Actions.UPDATE_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        updateProfileLoading: false,
        updateProfileResponse: action.updateProfileResponse
      });

    case Actions.UPDATE_PROFILE_FAILURE:
      return Object.assign({}, state, {
        updateProfileLoading: false
      });
    case Actions.GET_LAT_LONG_REQUEST:
      return Object.assign({}, state, {
        locationLoading: true
      });
    case Actions.GET_LAT_LONG:
      return Object.assign({}, state, {
        lat: action.lat,
        long: action.long,
        locationLoading: false
      });

    default:
      return state;
  }
};
export default Reducer;
