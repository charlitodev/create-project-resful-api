import { useState, useEffect } from "react";
import useGetPosts from "../../utils/useGetPosts";
import { addPost } from "../../api/post";
import { useLocation, useNavigate } from "react-router-dom";

function useAddModal(callback) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addPostData = async (data) => {
    try {
      await addPost(data);

      if (callback) callback();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    setTitle,
    setMessage,
    addPostData,
    title,
    message,
    show,
    setShow,
    handleClose,
    handleShow,
  };
}

export default useAddModal;
