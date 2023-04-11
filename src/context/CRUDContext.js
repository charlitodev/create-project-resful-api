import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPost, deletePost, editPost } from "../api/post";

export const CRUDContextProvider = createContext();

export const FuncCRUD = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const createPost = async (title, message) => {
    const data = { title, message };

    await addPost(data);
    navigate(-1);
  };

  const handleDeletePost = async (id) => {
    await deletePost(id);
    navigate(-1);
  };

  const handleUpdatePost = async (id, formData) => {
    await editPost(id, formData);
    navigate(-1);
  };

  const handleReloadPage = async () => {
    window.location.reload();
  };

  return (
    <CRUDContextProvider.Provider
      value={{
        handleReloadPage,
        handleUpdatePost,
        handleDeletePost,
        createPost,
        title,
        setTitle,
        setMessage,
        message,
        setFirstName,
        setLastName,
        setUserEmail,
        firstName,
        lastName,
        userEmail,
      }}
    >
      {children}
    </CRUDContextProvider.Provider>
  );
};
