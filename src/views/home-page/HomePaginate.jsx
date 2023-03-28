import React, { useContext } from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { Loader } from "../../components";
import { BOOTSTRAP_STYLES } from "../../configs/stylesData";
import { CRUDContextProvider } from "../../context/CRUDContext";
import { Link, useLocation } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

const HomePaginate = ({ currentItems }) => {
  const { data, isLoading } = useContext(CRUDContextProvider);
  const location = useLocation();

  return (
    <Table striped bordered hover size="sm">
      {/* <HomePaginate /> */}
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
          currentItems?.map &&
          currentItems.map((item, id) => {
            return (
              <tr key={id}>
                <td>{item.id}</td>
                <td>
                  <Link
                    to={`/profile/${item.id}`}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={item.avatar}
                      className={BOOTSTRAP_STYLES.avatar_icon}
                      style={{ width: "60px" }}
                      alt=""
                    />
                    {item.email}
                  </Link>
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
  );
};

export default HomePaginate;
