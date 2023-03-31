import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Paginate } from "../../components";

const Home = () => {
  const location = useLocation();

  return (
    <Container>
      <div className="my-4 text-end">
        <Link to="/create/post" state={{ background: location }}>
          <Button>Add</Button>
        </Link>
      </div>

      <Paginate itemsPerPage={5} />
    </Container>
  );
};

export default Home;
