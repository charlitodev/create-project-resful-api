import React from "react";
import { Dropdown, Button, Form } from "react-bootstrap";
import { MdSort } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import useParamsQuery from "./useParamsQuery";

const ActionButtons = ({ handleShow }) => {
  const location = useLocation();
  const { changeSort } = useParamsQuery();

  return (
    <div className="my-4 justify-content-between d-flex align-items-center">
      <div></div>
      <div></div>
      <div className="d-flex align-items-center">
        <Form.Control placeholder="Search..." />
        <Button>
          <AiOutlineSearch size={20} />
        </Button>
      </div>
      <div className="d-flex">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" className="me-3">
            <span className="me-1">Sort by</span>
            <MdSort size={20} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => changeSort(`?order=ASC`)}>
              ASC
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeSort(`?order=DESC`)}>
              DESC
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeSort(`?orderBy=createdAt`)}>
              Created At
            </Dropdown.Item>
            <Dropdown.Item>Limit to 5</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Link to="/create/post" state={{ background: location }}>
          <Button variant="primary" onClick={handleShow}>
            Add
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ActionButtons;
