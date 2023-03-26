import React from "react";
import { FuncAuth } from "./context/AuthContext";
import { FuncCRUD } from "./context/CRUDContext";
import { FuncModal } from "./context/ModalContext";

const AppProviders = ({ children }) => {
  return (
    <FuncCRUD>
      <FuncModal>
        <FuncAuth>{children}</FuncAuth>
      </FuncModal>
    </FuncCRUD>
  );
};

export default AppProviders;
