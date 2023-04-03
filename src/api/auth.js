import http from "../utils/http";

export function authLogin(data) {
  return http("POST", "/auth/login", data);
}

export function createUser(data) {
  return http("POST", "/user/signup", data);
}
