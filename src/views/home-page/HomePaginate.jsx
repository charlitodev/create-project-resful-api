import React from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { BOOTSTRAP_STYLES } from "../../configs/stylesData";
import { Link, useLocation } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import useGetPost from "../../utils/useGetPosts";
import { Loader } from "../../components";
import { NO_SEARCH_RESULT } from "../../configs/imagesData";

// Home table
const HomePaginate = ({ data, onClickEditShow, onClickDeleteShow }) => {
  const location = useLocation();
  const { isLoading } = useGetPost();

  return (
    <>
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <>
          {data?.length === 0 ? (
            <div className="img__container">
              <img
                className="no__search__result"
                src={NO_SEARCH_RESULT}
                alt={NO_SEARCH_RESULT}
              />
            </div>
          ) : (
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {data?.map &&
                  data.map((item, id) => {
                    return (
                      <tr key={id}>
                        <td>
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
                            className="d-flex align-items-center me-2 text-decoration-none"
                          >
                            <Button
                              variant="warning"
                              onClick={() => onClickEditShow(item.postId)}
                            >
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
                              onClick={() => onClickDeleteShow(item.postId)}
                            >
                              <FaTrash /> Delete
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          )}
        </>
      )}
    </>
  );
};

export default HomePaginate;
