export const GET_HOME_DATA_REQUEST = "GET_HOME_DATA_REQUEST";
export const GET_HOME_DATA_SUCCESS = "GET_HOME_DATA_SUCCESS";
export const GET_HOME_DATA_FAILURE = "GET_HOME_DATA_FAILURE";

export function getHomeData() {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: GET_HOME_DATA_REQUEST });
      const result = await api.get("review");
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
