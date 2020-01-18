const API_URL = "http://littra.in:4200/";

export const get = url => {
  const headers = {
    "Content-Type": "application/json"
  };
  return fetch(`${API_URL}/${url}`, {
    method: "get",
    headers
  });
};

export const post = (url, data = []) => {
  const headers = {
    "Content-Type": "application/json"
  };
  return fetch(`${API_URL}/${url}`, {
    method: "post",
    body: JSON.stringify(data),
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
