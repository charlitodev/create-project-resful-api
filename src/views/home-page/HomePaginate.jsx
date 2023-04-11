import React from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { BOOTSTRAP_STYLES } from "../../configs/stylesData";
import { Link, useLocation } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import useGetPost from "../../utils/useGetPosts";
import { Loader } from "../../components";

const HomePaginate = () => {
  const location = useLocation();
  const { data, isLoading } = useGetPost();

  return (
    <>
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Title</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {data?.length === 0 ? (
              <tr>
                <td>No data :((</td>
              </tr>
            ) : (
              data?.map &&
              data.map((item, id) => {
                return (
                  <tr key={id}>
                    <td className="py-3">
                      <Link
                        to={`/post/${item.postId}`}
                        className="text-decoration-none text-dark"
                      >
                        {item.title}
                      </Link>
                    </td>
                    <td className="py-3">{item.message}</td>

                    <td
                      className={`${BOOTSTRAP_STYLES.adjust_cta_buttons} d-flex justify-content-end`}
                    >
                      <Link
                        to={`/edit/post/${item.postId}`}
                        state={{ background: location }}
                        className="d-flex align-items-center me-3 text-decoration-none"
                      >
                        <Button variant="warning">
                          <FaPencilAlt /> Edit
                        </Button>
                      </Link>

                      <Link
                        to={`/delete/post/${item.postId}`}
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
      )}
    </>
  );
};

export default HomePaginate;
