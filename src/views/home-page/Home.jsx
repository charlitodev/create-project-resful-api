import React, { useContext } from "react";
import { Container, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BOOTSTRAP_STYLES } from "../../configs/stylesData";
import { CRUDContextProvider } from "../../context/CRUDContext";
import { ModalContextProvider } from "../../context/ModalContext";

const Home = () => {
  const { data } = useContext(CRUDContextProvider);
  const { handleShow } = useContext(ModalContextProvider);

  return (
    <Container>
      <div className="my-4 text-end">
        <Link to="/modal">
          <Button variant="primary" onClick={handleShow}>
            Add
          </Button>
        </Link>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img
                    src={item.avatar}
                    className={BOOTSTRAP_STYLES.avatar_icon}
                    style={{ width: "60px" }}
                    alt=""
                  />
                  {item.email}
                </td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td className={BOOTSTRAP_STYLES.adjust_cta_buttons}>
                  <Button variant="primary" className="mx-3">
                    Edit
                  </Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
