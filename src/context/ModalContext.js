import React, { useState, createContext } from "react";

export const ModalContextProvider = createContext();

export const FuncModal = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ModalContextProvider.Provider value={{ handleShow, handleClose, show }}>
      {children}
    </ModalContextProvider.Provider>
  );
};
