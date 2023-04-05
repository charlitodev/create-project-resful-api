import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const EditModal = ({
  show,
  handleClose,
  setTitle,
  setMessage,
  title,
  message,
  handleUpdatePost,
  idToEdit,
  postData,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              defaultValue={postData?.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter message"
              defaultValue={postData?.message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="warning"
          onClick={() => handleUpdatePost(idToEdit, { title, message })}
        >
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
