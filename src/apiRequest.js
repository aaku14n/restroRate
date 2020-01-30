import { getAsyncStorage } from "./utils/AsyncStorage.utils";

const API_URL = "http://54.77.46.103:4200";

export const get = async url => {
  const userDetails = await getAsyncStorage("userDetails");
  const headers = {
    "Content-Type": "application/json"
  };

  if (userDetails) {
    headers["Authorization"] = `Bearer ${userDetails.token}`;
  }

  return fetch(`${API_URL}/${url}`, {
    method: "get",
    headers
  });
};

export const post = async (url, data = []) => {
  const userDetails = await getAsyncStorage("userDetails");
  const headers = {
    "Content-Type": "application/json"
  };

  if (userDetails) {
    headers["Authorization"] = `Bearer ${userDetails.token}`;
  }
  return fetch(`${API_URL}/${url}`, {
    method: "post",
    body: JSON.stringify(data),
    headers
  });
};

export const imagePost = async (url, data = []) => {
  const userDetails = await getAsyncStorage("userDetails");
  const headers = {
    "Content-Type": "multipart/form-data"
  };

  if (userDetails) {
    headers["Authorization"] = `Bearer ${userDetails.token}`;
  }
  return fetch(`${API_URL}/${url}`, {
    method: "post",
    body: data,
    headers
  });
};

export const put = (url, data = {}) => {
  const headers = {
    "Content-Type": "application/json"
  };
  return fetch(`${API_URL}/${url}`, {
    method: "put",
    body: JSON.stringify(data),
    headers
  });
};
