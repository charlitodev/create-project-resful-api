import React, { useContext } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { AuthContextProvider } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { USERS_DATA } from "../../configs/usersData";
import { ROUTE_PATH } from "../../constants/routes";
import { BOOTSTRAP_STYLES } from "../../configs/stylesData";

const NavbarComponent = () => {
  const { logoutUser } = useContext(AuthContextProvider);

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <Link
            className={BOOTSTRAP_STYLES.remove_link_deco}
            to={ROUTE_PATH.home_view}
          >
            LOGO
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link>Sub link</Nav.Link>
          </Nav>
          <NavDropdown title="User" id="nav-dropdown">
            <NavDropdown.Item>
              <Link to={`/profile/${USERS_DATA.id}`}>Profile</Link>
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => logoutUser()}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
