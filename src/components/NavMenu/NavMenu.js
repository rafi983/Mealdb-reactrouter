import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <Navbar variant="dark" className="mealdb-nav">
      <Container>
        <Navbar.Brand href="#home" className="nav-brand">
          TheMealDb
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-menu">
              <NavLink
                to="/header"
                style={{ textDecoration: "none", color: "#ff9e32" }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Home
              </NavLink>
            </Nav.Link>

            <Nav.Link className="nav-menu">
              <NavLink
                to="/about"
                style={{ textDecoration: "none", color: "#ff9e32" }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                About
              </NavLink>
            </Nav.Link>

            <Nav.Link className="nav-menu">
              <NavLink
                to="/meals"
                style={{ textDecoration: "none", color: "#ff9e32" }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Meals
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
