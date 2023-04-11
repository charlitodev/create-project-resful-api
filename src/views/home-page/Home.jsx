import React from "react";
import { Container } from "react-bootstrap";

import useAddPost from "../posts/useAddPost";
import useEditPost from "../posts/useEditPost";
import AddModal from "../posts/AddModal";
import EditModal from "../posts/EditModal";
import DeleteModal from "../posts/DeleteModal";
import useGetPosts from "../../utils/useGetPosts";
import useDeletePost from "../posts/useDeletePost";
import { Paginate } from "../../components";

import ActionButtons from "./ActionButtons";

const Home = () => {
  const { reload, data } = useGetPosts();
  const {
    title,
    message,
    setTitle,
    setMessage,
    createPost,
    handleShow,
    handleClose,
    show,
  } = useAddPost(reload);

  const {
    handleCloseEdit,
    handleUpdatePost,
    editHandleShow,
    editShow,
    titleEdit,
    messageEdit,
    setTitleEdit,
    setMessageEdit,
    idToEdit,
    postData,
  } = useEditPost(reload);

  const {
    idToDelete,
    handleCloseDelete,
    handleDeletePost,
    deleteHandleShow,
    deleteShow,
  } = useDeletePost(reload);

  return (
    <Container>
      <ActionButtons handleShow={handleShow} />

      <Paginate
        data={data}
        onClickEditShow={editHandleShow}
        onClickDeleteShow={deleteHandleShow}
      />

      {/* Modals */}
      <AddModal
        show={show}
        handleClose={handleClose}
        setTitle={setTitle}
        setMessage={setMessage}
        title={title}
        message={message}
        createPost={createPost}
      />
      <EditModal
        show={editShow}
        handleClose={handleCloseEdit}
        setTitle={setTitleEdit}
        setMessage={setMessageEdit}
        title={titleEdit}
        message={messageEdit}
        handleUpdatePost={handleUpdatePost}
        idToEdit={idToEdit}
        postData={postData}
      />
      <DeleteModal
        show={deleteShow}
        handleClose={handleCloseDelete}
        handleDeletePost={handleDeletePost}
        idToDelete={idToDelete}
      />
    </Container>
  );
};

export default Home;
