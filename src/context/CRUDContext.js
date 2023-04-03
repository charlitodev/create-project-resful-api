import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPost, deletePost, editPost } from "../api/post";
import useGetPosts from "../utils/useGetPosts";

export const CRUDContextProvider = createContext();

export const FuncCRUD = ({ children }) => {
  const [postData, setPostData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();

  const createPost = async (title, message) => {
    await addPost({ title, message });
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

  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <CRUDContextProvider.Provider
      value={{
        handleReloadPage,
        postData,
        handleUpdatePost,
        handleDeletePost,
        createPost,
        title,
        setTitle,
        setMessage,
        message,
        isLoading,
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
