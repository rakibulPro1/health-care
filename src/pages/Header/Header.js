import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navbar"
      >
        <Container fluid className="px-4">
          <h2 className="logo">Health Care</h2>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto links">
              <NavLink
                to="/home"
                className="link-item"
                activeClassName="selected"
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className="link-item"
                activeClassName="selected"
              >
                About
              </NavLink>

              <NavLink
                to="/searvices"
                className="link-item"
                activeClassName="selected"
              >
                Services
              </NavLink>

              <NavLink
                to="/contact"
                className="link-item"
                activeClassName="selected"
              >
                Contact
              </NavLink>
              <NavLink to="/login" className="d-flex align-self-center ms-4">
                <button className="btn btn-sm btn-success">Login</button>
              </NavLink>
              <NavLink to="/signup" className="d-flex align-self-center ms-4">
                <button className="btn btn-sm btn-success">SignUp</button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
