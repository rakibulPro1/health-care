import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
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
                to="/appoinment"
                className="link-item"
                activeClassName="selected"
              >
                Appoinment
              </NavLink>

              <NavLink
                to="/contact"
                className="link-item"
                activeClassName="selected"
              >
                Contact
              </NavLink>

              {user.email ? (
                <button onClick={logOut} className="btn btn-sm btn-success">
                  LogOut
                </button>
              ) : (
                <NavLink to="/login" className="btn btn-sm btn-success">
                  Login
                </NavLink>
              )}
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
