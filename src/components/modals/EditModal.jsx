import React, { useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { CRUDContextProvider } from "../../context/CRUDContext";

const EditModal = () => {
  const { setFirstName, setLastName, setUserEmail, editUser, data } =
    useContext(CRUDContextProvider);

  const { id } = useParams();
  const navigate = useNavigate();

  const user =
    data?.find && data.find((item) => String(item.id) === String(id));
  const { first_name, last_name, email } = user ?? {};

  return (
    <div className="modalDiv">
      <div className="modal">
        <Modal.Header>
          <Modal.Title>Edit user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                defaultValue={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                defaultValue={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                defaultValue={email}
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
          <Button variant="primary" onClick={() => editUser(id)}>
            Edit
          </Button>
        </Modal.Footer>
      </div>
    </div>
  );
};

export default EditModal;
