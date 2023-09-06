import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import image from "../images/logo.svg.png";
import Button from "react-bootstrap/esm/Button";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate()
  const reload = () => {
    window.location.reload(navigation("/Points"))
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ position: "fixed", top: "0", zIndex: "100", width: "100%" , backgroundColor: "rgba(128, 126, 126, 0.6)"}}
    >
      <Container fluid>
        <Navbar.Brand href="">
          {" "}
          <Link to="/">
            <img src={image} alt="logo" width="100px" />
          </Link>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link to="/ProfilePage" className="me-2">
              <Button variant="outline-light">
                <FaRegCircleUser />
                <span> Profile</span>
              </Button>{" "}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
