import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import useGetPosts from "../../utils/useGetPosts";
import useAddModal from "./useAddModal";

const AddModal = () => {
  const { onReload } = useGetPosts();
  const { show, handleClose, setTitle, setMessage, addPostData } =
    useAddModal(onReload);

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
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
