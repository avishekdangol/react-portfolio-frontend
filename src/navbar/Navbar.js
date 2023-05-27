import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../logo.svg";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Portfolio</Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Navbar.Brand href="#home">
              <img src={logo} alt="logo" />
              Portfolio
            </Navbar.Brand>
          </Nav>
          <Nav>
            <div>
              <small className="d-block">Call: +977-9812131415</small>
              <small>Write: kumud@abc.com</small>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
