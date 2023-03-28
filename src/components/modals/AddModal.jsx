import React, { useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CRUDContextProvider } from "../../context/CRUDContext";

const AddModal = () => {
  const {
    firstName,
    lastName,
    userEmail,
    setFirstName,
    setLastName,
    setUserEmail,
    createUser,
  } = useContext(CRUDContextProvider);

  const navigate = useNavigate();

  return (
    <div className="modalDiv">
      <div className="modal">
        <Modal.Header>
          <Modal.Title>Add user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => createUser(firstName, lastName, userEmail)}
          >
            Create
          </Button>
        </Modal.Footer>
      </div>
    </div>
  );
};

export default AddModal;
