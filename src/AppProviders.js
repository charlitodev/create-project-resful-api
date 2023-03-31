import React from "react";
import { FuncAuth } from "./context/AuthContext";
import { FuncCRUD } from "./context/CRUDContext";

const AppProviders = ({ children }) => {
  return (
    <FuncAuth>
      <FuncCRUD>{children}</FuncCRUD>
    </FuncAuth>
  );
};

export default AppProviders;
