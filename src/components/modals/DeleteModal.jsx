import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DeleteModal = () => {
  const navigate = useNavigate();

  return (
    <div className="modalDiv">
      <div className="modal">
        <Modal.Header>
          <Modal.Title>Delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Are you sure you want to delete this user?</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => navigate(-1)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </div>
    </div>
  );
};

export default DeleteModal;
