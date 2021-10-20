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
                <Nav>
                  <button onClick={logOut} className="btn btn-sm btn-success">
                    LogOut
                  </button>
                  <span className="text-light ms-2">{user.displayName}</span>
                </Nav>
              ) : (
                <NavLink to="/login" className="btn btn-sm btn-success">
                  Login
                </NavLink>
              )}
              <NavLink to="/signup" className="btn btn-sm btn-success ms-2">
                Sign Up
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
