import React from "react";
import { Dropdown, Button, Form } from "react-bootstrap";
import { MdSort } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import useParamsQuery from "./useParamsQuery";
import { QUERY_ROUTE_PATH } from "../../constants/routes";

const ActionButtons = ({ handleShow }) => {
  const location = useLocation();
  const { changeSort, querySearch, setQueryValue, queryLimit, queryValue } =
    useParamsQuery();

  return (
    <div className="my-4 justify-content-between d-flex align-items-center">
      <div></div>
      <div></div>
      <div className="d-flex align-items-center">
        <Form.Control
          placeholder="Search..."
          defaultValue={queryValue}
          onChange={(e) => setQueryValue(e.target.value)}
        />
        <Button onClick={() => querySearch()}>
          <AiOutlineSearch size={20} />
        </Button>
      </div>
      <div className="d-flex align-items-center">
        <div className="form-group me-2 d-flex align-items-center">
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => queryLimit(e.target.value)}
          >
            <option value={5}>Limit by 5</option>
            <option value={10}>Limit by 10</option>
            <option value={15}>Limit by 15</option>
            <option value={20}>Limit by 20</option>
          </Form.Select>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" className="me-2">
            <span className="me-1">Sort by</span>
            <MdSort size={20} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => changeSort(QUERY_ROUTE_PATH.order_asc)}
            >
              ASC
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => changeSort(QUERY_ROUTE_PATH.order_desc)}
            >
              DESC
            </Dropdown.Item>
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
