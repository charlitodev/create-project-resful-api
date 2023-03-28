import React, { useContext } from "react";
import { AuthContextProvider } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedAuthUser = ({ children }) => {
  const { userActive } = useContext(AuthContextProvider);

  if (Object.keys(userActive).length === 0) {
    alert("You have to Login First!!");

    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedAuthUser;
