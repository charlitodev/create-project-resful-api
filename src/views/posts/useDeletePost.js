import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../api/post";

function useDeletePost(callback) {
  let navigate = useNavigate();
  const [deleteShow, setDeleteShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");

  const handleCloseDelete = () => {
    navigate(-1);
    setDeleteShow(false);
  };

  const deleteHandleShow = (id) => {
    setDeleteShow(true);
    setIdToDelete(id);
  };

  async function handleDeletePost(id) {
    try {
      await deletePost(id);

      if (callback) callback(); // refresh the page
    } catch (error) {
      console.log(error);
    }

    handleCloseDelete();
  }
  return {
    idToDelete,
    handleCloseDelete,
    handleDeletePost,
    deleteHandleShow,
    deleteShow,
    setDeleteShow,
  };
}

export default useDeletePost;
