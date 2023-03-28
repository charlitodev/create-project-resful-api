import React from "react";
import { FuncAuth } from "./context/AuthContext";
import { FuncCRUD } from "./context/CRUDContext";

const AppProviders = ({ children }) => {
  return (
    <FuncCRUD>
      <FuncAuth>{children}</FuncAuth>
    </FuncCRUD>
  );
};

export default AppProviders;
