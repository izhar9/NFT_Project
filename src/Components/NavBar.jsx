import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // style={{ background: "#000" }} 
      variant="dark"
      sticky="top"
      bg="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
            <img
              src="/img/logo.png"
              width="100"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/' style={{ color: "#fff", fontWeight: "bold" }}>Home</Nav.Link>
            <Nav.Link as={Link} to='/roadMap' style={{ color: "#fff", fontWeight: "bold" }}>RoadMap</Nav.Link>
            <Nav.Link as={Link} to='/revenueShare' style={{ color: "#fff", fontWeight: "bold" }}>Revenue Share</Nav.Link>
            <Nav.Link as={Link} to='/community' style={{ color: "#fff", fontWeight: "bold" }}>Community</Nav.Link>
            <Nav.Link as={Link} to='/contact' style={{ color: "#fff", fontWeight: "bold" }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
