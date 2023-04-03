import React from "react";
import { Navigate } from "react-router-dom";
import cookies from "../../utils/cookies";
import { AUTH_COOKIE_NAME } from "../../constants/cookies";

const ProtectedAuthUser = ({ children }) => {
  const token = cookies.get(AUTH_COOKIE_NAME);

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedAuthUser;
