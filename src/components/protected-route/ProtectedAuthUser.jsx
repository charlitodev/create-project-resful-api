import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { AUTH_COOKIE_NAME } from "../../constants/cookies";

const ProtectedAuthUser = ({ children }) => {
  const cookies = new Cookies();
  const token = cookies.get(AUTH_COOKIE_NAME);

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedAuthUser;
