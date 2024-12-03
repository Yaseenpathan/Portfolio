import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = ({ onNavigate }) => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
        padding: "1rem 0",
        width: "100%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container fluid>
        <Navbar.Brand
          href="#home"
          className="text-white fw-bold ms-5"
          style={{ fontSize: "1.5rem" }}
        >
          Pathan Yaseen Khan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => onNavigate("home")}
              className="text-white mx-3"
              style={{ fontSize: "1.1rem" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => onNavigate("skills")}
              className="text-white mx-3"
              style={{ fontSize: "1.1rem" }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              onClick={() => onNavigate("projects")}
              className="text-white mx-3"
              style={{ fontSize: "1.1rem" }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => onNavigate("about")}
              className="text-white mx-3"
              style={{ fontSize: "1.1rem" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => onNavigate("contact")}
              className="text-white mx-3"
              style={{ fontSize: "1.1rem" }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
