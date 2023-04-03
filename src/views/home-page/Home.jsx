import React, { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Paginate } from "../../components";
import { FiRefreshCcw } from "react-icons/fi";
import { CRUDContextProvider } from "../../context/CRUDContext";

const Home = () => {
  const location = useLocation();
  const { handleReloadPage } = useContext(CRUDContextProvider);

  return (
    <Container>
      <div className="my-4 text-end">
        <FiRefreshCcw
          className="refresh__btn me-3"
          size={30}
          onClick={() => handleReloadPage()}
        />

        <Link to="/create/post" state={{ background: location }}>
          <Button>Add</Button>
        </Link>
      </div>

      <Paginate itemsPerPage={5} />
    </Container>
  );
};

export default Home;
