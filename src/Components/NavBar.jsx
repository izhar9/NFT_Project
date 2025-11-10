import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      style={{
        background: "linear-gradient(90deg, #ff0080, #7928ca, #2afadf)",
        boxShadow: "0 4px 20px rgba(255, 0, 128, 0.3)",
      }}
    >
      <Container fluid>
        <Navbar.Brand
          href="#home"
          style={{ color: "#fff", fontWeight: "bold" }}
        >
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>RoadMap</Nav.Link>
            <Nav.Link>Rev Share</Nav.Link>
            <Nav.Link>Community</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
