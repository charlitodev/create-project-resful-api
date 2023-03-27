import React, { useContext } from "react";
import { Container, Button, Table } from "react-bootstrap";
import { BOOTSTRAP_STYLES } from "../../configs/stylesData";
import { CRUDContextProvider } from "../../context/CRUDContext";
import { ModalContextProvider } from "../../context/ModalContext";
import { Loader } from "../../components";
import { Link, useLocation } from "react-router-dom";
import { FaTrash, FaPencilAlt } from "react-icons/fa";

const Home = () => {
  const { data, isLoading } = useContext(CRUDContextProvider);
  const { handleShow } = useContext(ModalContextProvider);
  const location = useLocation();

  return (
    <Container>
      <div className="my-4 text-end">
        <Link to="/create/user" state={{ background: location }}>
          <Button>Add</Button>
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
          {isLoading ? (
            <Loader loading={isLoading} />
          ) : (
            data.map((item) => {
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
                  <td className="py-3">{item.first_name}</td>
                  <td className="py-3">{item.last_name}</td>
                  <td className={BOOTSTRAP_STYLES.adjust_cta_buttons}>
                    <Link
                      to={`/edit/user/${item.id}`}
                      state={{ background: location }}
                      className="d-flex align-items-center mx-3 text-decoration-none"
                    >
                      <Button variant="primary">
                        <FaPencilAlt /> Edit
                      </Button>
                    </Link>

                    <Link
                      to={`/delete/user/${item.id}`}
                      state={{ background: location }}
                      className="text-decoration-none"
                    >
                      <Button
                        variant="danger"
                        className="d-flex align-items-center"
                      >
                        <FaTrash /> Delete
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
