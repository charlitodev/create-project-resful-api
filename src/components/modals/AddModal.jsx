import React, { useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CRUDContextProvider } from "../../context/CRUDContext";

const AddModal = () => {
  const { title, message, setTitle, setMessage, createPost } =
    useContext(CRUDContextProvider);

  const navigate = useNavigate();

  return (
    <div className="modalDiv">
      <div className="modal">
        <Modal.Header>
          <Modal.Title>Create post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => createPost(title, message)}>
            Create
          </Button>
        </Modal.Footer>
      </div>
    </div>
  );
};

export default AddModal;
