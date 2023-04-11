import React, { useContext, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { CRUDContextProvider } from "../../context/CRUDContext";
import useGetPost from "../../utils/useGetPosts";

const EditModal = () => {
  const { handleUpdatePost } = useContext(CRUDContextProvider);
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  return (
    <div className="modalDiv">
      <div className="modal">
        <Modal.Header>
          <Modal.Title>Edit post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter message"
                defaultValue={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleUpdatePost(id, { title, message })}
          >
            Edit
          </Button>
        </Modal.Footer>
      </div>
    </div>
  );
};

export default EditModal;
