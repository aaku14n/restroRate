export const GET_HOME_DATA_REQUEST = "GET_HOME_DATA_REQUEST";
export const GET_HOME_DATA_SUCCESS = "GET_HOME_DATA_SUCCESS";
export const GET_HOME_DATA_FAILURE = "GET_HOME_DATA_FAILURE";

export const ADD_REVIEW_REQUEST = "ADD_REVIEW_REQUEST";
export const ADD_REVIEW_SUCCESS = "ADD_REVIEW_SUCCESS";
export const ADD_REVIEW_FAILURE = "ADD_REVIEW_FAILURE";

export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

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
