import React, { useState, createContext } from "react";

export const ModalContextProvider = createContext();

export const FuncModal = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <ModalContextProvider.Provider value={{ handleShow, handleClose, show }}>
      {children}
    </ModalContextProvider.Provider>
  );
};
