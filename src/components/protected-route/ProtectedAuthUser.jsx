import React, { useContext } from "react";
import { AuthContextProvider } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedAuthUser = ({ children }) => {
  const { userActive } = useContext(AuthContextProvider);

  if (Object.keys(userActive).length === 0) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedAuthUser;
