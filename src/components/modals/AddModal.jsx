import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ModalContextProvider } from "../../context/ModalContext";

const AddModal = () => {
  const { handleClose, show } = useContext(ModalContextProvider);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Link to="/home">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Link>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
