import {
  createAsyncStorage,
  getAsyncStorage,
  removeAsyncStorage
} from "../utils/AsyncStorage.utils";
import { Alert } from "react-native";
import { registerForPushNotificationsAsync } from "../PushNotification";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const USER_NOT_LOGGED_IN = "USER_NOT_LOGGED_IN";
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const LOG_OUT_USER = "LOG_OUT_USER";

export function userLogin(userDetailsObject) {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const result = await api.post("register", userDetailsObject);
      const resultJson = await result.json();

      await createAsyncStorage("userDetails", resultJson);
      registerForPushNotificationsAsync();
      return dispatch({
        type: USER_LOGIN_SUCCESS,
        userDetails: resultJson
      });
    } catch (e) {
      return dispatch({ type: USER_LOGIN_FAILURE, error: e.message });
    }
  };
}

export function guestLogin() {
  return async (dispatch, getState, { api }) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const result = await api.get("guestLogin");
      const resultJson = await result.json();

      await createAsyncStorage("userDetails", resultJson);

      return dispatch({
        type: USER_LOGIN_SUCCESS,
        userDetails: resultJson
      });
    } catch (e) {
      return dispatch({ type: USER_LOGIN_FAILURE, error: e.message });
    }
  };
}
export function validateUserLogin() {
  return async (dispatch, getState) => {
    try {
      const userDetails = await getAsyncStorage("userDetails");
      if (!userDetails) {
        throw Error("NOt logged In");
      }

      dispatch({
        type: USER_LOGGED_IN,
        userDetails
      });
    } catch (e) {
      dispatch({ type: USER_NOT_LOGGED_IN });
    }
  };
}
export function logoutUser() {
  return async (dispatch, getState, { api }) => {
    await api.get("logout");

    await removeAsyncStorage("userDetails");
    dispatch({
      type: LOG_OUT_USER
    });
  };
}
