import React, { useState, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Paginate } from "../../components";
import { FiRefreshCcw } from "react-icons/fi";
import AddModal from "../posts/AddModal";
import useAddModal from "../posts/useAddModal";
import { Modal, Form } from "react-bootstrap";
import useGetPosts from "../../utils/useGetPosts";

const Home = () => {
  const { onReload } = useGetPosts();
  const {
    handleShow,
    show,
    handleClose,
    setTitle,
    setMessage,
    title,
    message,
    addPostData,
  } = useAddModal(onReload);

  return (
    <Container>
      <div className="my-4 d-flex justify-content-between">
        <h3>Posts</h3>

        <div>
          {/* <FiRefreshCcw
            className="refresh__btn me-3"
            size={20}
            onClick={() => handleReloadPage()}
          /> */}

          {/* <Link to="/post/create" state={{ background: location }}>
            <Button onClick={handleShow}>Add</Button>
          </Link> */}

          <Button onClick={handleShow}>Add</Button>
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
              <Button
                variant="primary"
                onClick={addPostData({ title, message })}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

      <Paginate />
    </Container>
  );
};

export default Home;
