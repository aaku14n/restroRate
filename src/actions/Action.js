export const GET_HOME_DATA_REQUEST = "GET_HOME_DATA_REQUEST";
export const GET_HOME_DATA_SUCCESS = "GET_HOME_DATA_SUCCESS";
export const GET_HOME_DATA_FAILURE = "GET_HOME_DATA_FAILURE";

export const ADD_REVIEW_REQUEST = "ADD_REVIEW_REQUEST";
export const ADD_REVIEW_SUCCESS = "ADD_REVIEW_SUCCESS";
export const ADD_REVIEW_FAILURE = "ADD_REVIEW_FAILURE";

export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

export const RECENT_SEARCH_REQUEST = "RECENT_SEARCH_REQUEST";
export const RECENT_SEARCH_SUCCESS = "RECENT_SEARCH_SUCCESS";
export const RECENT_SEARCH_FAILURE = "RECENT_SEARCH_FAILURE";

export const GET_RESTRO_REQUEST = "GET_RESTRO_REQUEST";
export const GET_RESTRO_SUCCESS = "GET_RESTRO_SUCCESS";
export const GET_RESTRO_FAILURE = "GET_RESTRO_FAILURE";

export const ALL_USER_REQUEST = "ALL_USER_REQUEST";
export const ALL_USER_SUCCESS = "ALL_USER_SUCCESS";
export const ALL_USER_FAILURE = "ALL_USER_FAILURE";

export const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE";

export const SEND_RECOMMEND_REQUEST = "SEND_RECOMMEND_REQUEST";
export const SEND_RECOMMEND_SUCCESS = "SEND_RECOMMEND_SUCCESS";
export const SEND_RECOMMEND_FAILURE = "SEND_RECOMMEND_FAILURE";

export const MY_RECOMMEND_REQUEST = "MY_RECOMMEND_REQUEST";
export const MY_RECOMMEND_SUCCESS = "MY_RECOMMEND_SUCCESS";
export const MY_RECOMMEND_FAILURE = "MY_RECOMMEND_FAILURE";

export const MY_REVIEW_REQUEST = "MY_REVIEW_REQUEST";
export const MY_REVIEW_SUCCESS = "MY_REVIEW_SUCCESS";
export const MY_REVIEW_FAILURE = "MY_REVIEW_FAILURE";

export const GET_LAT_LONG = "GET_LAT_LONG";

export function getHomeData(lat, long) {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: GET_HOME_DATA_REQUEST });
      const result = await api.get("getAllReviews");
      const resultJson = await result.json();

      dispatch({
        type: GET_HOME_DATA_SUCCESS,
        homeData: resultJson.data
      });
    } catch (e) {
      dispatch({
        type: GET_HOME_DATA_FAILURE,
        error: e.message
      });
    }
  };
}

export function myAccountReviews() {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: MY_REVIEW_REQUEST });
      const result = await api.get("review");
      const resultJson = await result.json();
      return dispatch({
        type: MY_REVIEW_SUCCESS,
        myAccountReview: resultJson.data
      });
    } catch (e) {
      return dispatch({
        type: MY_REVIEW_FAILURE,
        error: e.message
      });
    }
  };
}

export function submitReview(reviewObj) {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: ADD_REVIEW_REQUEST });
      const result = await api.post("review", reviewObj);
      const resultJson = await result.json();
      return dispatch({
        type: ADD_REVIEW_SUCCESS,
        addReview: resultJson.data
      });
    } catch (e) {
      return dispatch({
        type: ADD_REVIEW_FAILURE,
        error: e.message
      });
    }
  };
}

export function getAllUser() {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: ALL_USER_REQUEST });
      const result = await api.get("users");
      const resultJson = await result.json();
      return dispatch({
        type: ALL_USER_SUCCESS,
        userList: resultJson.data
      });
    } catch (e) {
      return dispatch({
        type: ALL_USER_FAILURE,
        error: e.message
      });
    }
  };
}

export function getRestaurant(loc) {
  return async (dispatch, getState, { api }) => {
    try {
      const result = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${loc}&radius=100&type=restaurant&key=AIzaSyDM4BtVx-2cRWTEEu3JOdx0szr735nXzPU`
      );
      const resultJson = await result.json();

      return resultJson.results;
    } catch (e) {
      return {
        type: "Erro"
      };
    }
  };
}

export function getCityName(lat, long) {
  return async (dispatch, getState, { api }) => {
    try {
      const result = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=true&key=AIzaSyDM4BtVx-2cRWTEEu3JOdx0szr735nXzPU`
      );
      const resultJson = await result.json();
      return resultJson.plus_code;
    } catch (e) {
      return {
        type: "Erro"
      };
    }
  };
}
export function searchs(string) {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: SEARCH_REQUEST });
      const result = await api.get(`search?keyword=${string}`);
      const resultJson = await result.json();
      dispatch({
        type: SEARCH_SUCCESS,
        searchResult: resultJson
      });
    } catch (e) {
      dispatch({
        type: SEARCH_FAILURE,
        error: e.message
      });
    }
  };
}

export function getRecentSearches() {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: RECENT_SEARCH_REQUEST });
      const result = await api.get(`recentSearches`);
      const resultJson = await result.json();
      dispatch({
        type: RECENT_SEARCH_SUCCESS,
        recentSearch: resultJson.data
      });
    } catch (e) {
      dispatch({
        type: RECENT_SEARCH_FAILURE,
        error: e.message
      });
    }
  };
}

export function getRestoDetail(id) {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: GET_RESTRO_REQUEST });
      const result = await api.get(`restaurant/${id}`);
      const resultJson = await result.json();
      return dispatch({
        type: GET_RESTRO_SUCCESS,
        getRestroDetails: resultJson.data
      });
    } catch (e) {
      return dispatch({
        type: GET_RESTRO_FAILURE,
        error: e.message
      });
    }
  };
}

export function uploadImage(image) {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: UPLOAD_IMAGE_REQUEST });
      const formData = new FormData();
      formData.append("image", image);
      const result = await api.imagePost("saveImage", formData);
      const resultJson = await result.json();
      return {
        type: UPLOAD_IMAGE_SUCCESS,
        imageInfo: resultJson
      };
    } catch (e) {
      return {
        type: UPLOAD_IMAGE_FAILURE,
        error: e.message
      };
    }
  };
}

export function sendRecommandation(recommandationObj) {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: SEND_RECOMMEND_REQUEST });
      const result = await api.post(`recommendApp`, recommandationObj);
      const resultJson = await result.json();
      return dispatch({
        type: SEND_RECOMMEND_SUCCESS,
        sendRecommandation: resultJson
      });
    } catch (e) {
      return dispatch({
        type: SEND_RECOMMEND_FAILURE,
        error: e.message
      });
    }
  };
}

export function myRecommendation() {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: MY_RECOMMEND_REQUEST });
      const result = await api.get(`recommendations`);
      const resultJson = await result.json();
      return dispatch({
        type: MY_RECOMMEND_SUCCESS,
        myRecommandation: resultJson.data
      });
    } catch (e) {
      return dispatch({
        type: MY_RECOMMEND_FAILURE,
        error: e.message
      });
    }
  };
}

export function getCurrentLocation() {
  return async (dispatch, getState, { api }) => {
    try {
      navigator.geolocation.getCurrentPosition(
        position => {
          const location = JSON.stringify(position);
          const latitude =
            JSON.parse(location) &&
            JSON.parse(location).coords &&
            JSON.parse(location).coords.latitude;
          const longitude =
            JSON.parse(location) &&
            JSON.parse(location).coords &&
            JSON.parse(location).coords.longitude;
          return dispatch({
            type: GET_LAT_LONG,
            lat: latitude,
            long: longitude
          });
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } catch (e) {
      return {
        type: "Erro"
      };
    }
  };
}
