export const GET_HOME_DATA_REQUEST = "GET_HOME_DATA_REQUEST";
export const GET_HOME_DATA_SUCCESS = "GET_HOME_DATA_SUCCESS";
export const GET_HOME_DATA_FAILURE = "GET_HOME_DATA_FAILURE";

export const ADD_REVIEW_REQUEST = "ADD_REVIEW_REQUEST";
export const ADD_REVIEW_SUCCESS = "ADD_REVIEW_SUCCESS";
export const ADD_REVIEW_FAILURE = "ADD_REVIEW_FAILURE";

export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

export const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_FAILURE = "SEARCH_FAILURE";

export function getHomeData() {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: GET_HOME_DATA_REQUEST });
      const result = await api.get("review");
      const resultJson = await result.json();
      // console.log(resultJson);
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

export function submitReview(reviewObj) {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: ADD_REVIEW_REQUEST });

      const result = await api.post("review", reviewObj);
      const resultJson = await result.json();
      dispatch({
        type: ADD_REVIEW_SUCCESS,
        addReview: resultJson.data
      });
    } catch (e) {
      dispatch({
        type: ADD_REVIEW_FAILURE,
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
