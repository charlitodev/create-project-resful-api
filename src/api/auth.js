import http from "../utils/http";

export function authLogin(data) {
  return http("POST", "/auth/login", data);
}

export function createUser(data) {
  return http("POST", "/user/signup", data);
}

export function changePassword(data) {
  return http("PUT", "/user/password", data);
}

export function getUser(data) {
  return http("PUT", "/user/", data);
}
