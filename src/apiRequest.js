const API_URL = "littra.in:4200/";
const prefixHost = "http://";

export const get = url => {
  const headers = {
    "Content-Type": "application/json"
  };
  return fetch(`${prefixHost}${API_URL}/${url}`, {
    method: "get",
    headers
  });
};

export const post = (url, data = []) => {
  const headers = {
    "Content-Type": "application/json"
  };
  return fetch(`${prefixHost}${API_URL}/${url}`, {
    method: "post",
    body: JSON.stringify(data),
    headers
  });
};

export const put = (url, data = {}) => {
  const headers = {
    "Content-Type": "application/json"
  };
  return fetch(`${prefixHost}${API_URL}/${url}`, {
    method: "put",
    body: JSON.stringify(data),
    headers
  });
};
