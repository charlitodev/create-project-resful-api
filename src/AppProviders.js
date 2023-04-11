import React from "react";
import { FuncAuth } from "./context/AuthContext";

const AppProviders = ({ children }) => {
  return <FuncAuth>{children}</FuncAuth>;
};

export default AppProviders;
