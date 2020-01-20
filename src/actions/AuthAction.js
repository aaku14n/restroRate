export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export function userLogin(userDetailsObject) {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      console.log(userDetailsObject);
      const result = await api.post("login", userDetailsObject);
      console.log(result);
      const resultJson = await result.json();
      return dispatch({
        type: USER_LOGIN_SUCCESS,
        userDetails: resultJson
      });
    } catch (e) {
      return dispatch({ type: USER_LOGIN_FAILURE, error: e.message });
    }
  };
}
