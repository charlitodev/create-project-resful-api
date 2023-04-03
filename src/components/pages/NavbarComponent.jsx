import React, { useContext } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { AuthContextProvider } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../constants/routes";
import { BOOTSTRAP_STYLES } from "../../configs/stylesData";
import { BiLogOut } from "react-icons/bi";
import { NAV_LOGO } from "../../configs/imagesData";

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
            <img src={NAV_LOGO} alt="" className="w-25" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto"></Nav>
          <NavDropdown title="User" id="nav-dropdown">
            <NavDropdown.Item onClick={() => logoutUser()}>
              <BiLogOut /> Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
