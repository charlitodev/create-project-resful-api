import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../api/post";

function useAddPost(callback) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    navigate(-1);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  async function createPost(data) {
    try {
      await addPost(data);

      if (callback) callback(); // refresh the page
    } catch (error) {
      console.log(error);
    }

    handleClose();
  }

  return {
    setMessage,
    setTitle,
    title,
    message,
    createPost,
    show,
    setShow,
    handleClose,
    handleShow,
  };
}

export default useAddPost;
