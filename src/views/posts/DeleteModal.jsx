import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { CRUDContextProvider } from "../../context/CRUDContext";

const DeleteModal = () => {
  const { handleDeletePost, data } = useContext(CRUDContextProvider);
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="modalDiv">
      <div className="modal">
        <Modal.Header>
          <Modal.Title>Delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Are you sure you want to delete this post?</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Close
          </Button>
          <Button variant="danger" onClick={() => handleDeletePost(id)}>
            Delete
          </Button>
        </Modal.Footer>
      </div>
    </div>
  );
};

export default DeleteModal;
