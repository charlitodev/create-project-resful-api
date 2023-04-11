import axios from "axios";
import { API_URL } from "../constants/environment";
import { AUTH_COOKIE_NAME } from "../constants/cookies";
import cookies from "./cookies";
import qs from "qs";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  mode: "no-cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  },
  credentials: "same-origin",
});

instance.interceptors.request.use((config) => {
  if (cookies.get(AUTH_COOKIE_NAME)) {
    config.headers.Authorization = `Bearer ${cookies.get(AUTH_COOKIE_NAME)}`;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { message } = error || {};

    if (message === "jwt expired") {
      cookies.remove(AUTH_COOKIE_NAME);
      window.location.reload("/");
    }

    return Promise.reject(error);
  }
);

export function parseSearchToObject(search) {
  // if (search.length === 0) {
  //   return { post: "/" };
  // } else {
  //   const value = search.substring(1);

  //   return qs.parse(value);
  // }

  const value = search.substring(1);

  return qs.parse(value);
}

export default async function http(method, url, data) {
  const config = { method, url };

  if (method.toUpperCase() === "GET" || method.toUpperCase() === "DELETE") {
    config.params = { limit: 5, ...data };
  } else {
    config.data = data;
  }

  const response = await instance(config);
  const { data: dataResponse } = response;

  return dataResponse;
}
