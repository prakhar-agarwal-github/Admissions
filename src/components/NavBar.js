import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { KEYS, ROLES } from "../constants";

const NavBar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem(KEYS.CURRENT_USER));

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="cp" onClick={() => navigate("/")}>
          Admissions
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav>
            {!user && (
              <Nav.Link onClick={() => navigate("/login")}>
                Login/Signup
              </Nav.Link>
            )}
            {user && (
              <>
                {user.userRole === ROLES.STUDENT ? (
                  <>
                    <Nav.Link onClick={() => navigate("/applications")}>
                      My Applications
                    </Nav.Link>
                    <Nav.Link onClick={() => navigate("/newapplication")}>
                      Apply for Admission
                    </Nav.Link>
                  </>
                ) : (
                  <Nav.Link onClick={() => navigate("/adminpanel")}>
                    Applications
                  </Nav.Link>
                )}

                <Nav.Link
                  onClick={() => {
                    localStorage.removeItem(KEYS.CURRENT_USER);
                    navigate("/login");
                  }}
                >
                  Log Out
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
