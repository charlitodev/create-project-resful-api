import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editPost, getPost } from "../../api/post";

function useEditPost(callback) {
  const [titleEdit, setTitleEdit] = useState("");
  const [messageEdit, setMessageEdit] = useState("");
  let navigate = useNavigate();
  const [editShow, setEditShow] = useState(false);
  const [idToEdit, setIdToEdit] = useState(null);
  const [postData, setPostData] = useState({});

  const handleCloseEdit = () => {
    navigate(-1);
    setEditShow(false);
    setPostData({});
  };

  const editHandleShow = async (id) => {
    setEditShow(true);
    setIdToEdit(id);

    const data = await getPost(id);
    setPostData({ title: data.title, message: data.message }); // for placeholder
  };

  async function handleUpdatePost(id, formData) {
    try {
      await editPost(id, formData);

      if (callback) callback(); // refresh the page
    } catch (error) {
      console.log(error);
    }

    handleCloseEdit();
  }
  return {
    postData,
    idToEdit,
    handleCloseEdit,
    handleUpdatePost,
    editHandleShow,
    editShow,
    setEditShow,
    titleEdit,
    messageEdit,
    setTitleEdit,
    setMessageEdit,
  };
}

export default useEditPost;
