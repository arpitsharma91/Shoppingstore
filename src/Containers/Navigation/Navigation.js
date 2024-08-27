import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../UserContext";
function Navigation(props) {
  const user = useContext(UserContext);
  return (
    <>
      {/*bg="dark"*/}

      {/*<NavLink to="/">BurgerBuilder</NavLink>*/}
      <Navbar
        collapseOnSelect
        expand="sm"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand>
            {" "}
            <NavLink
              to="/"
              style={{
                textDecoration: "inherit",
                color: "inherit",
              }}
            >
              ShoppingStore
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink
                  to="/"
                  style={{
                    textDecoration: "inherit",
                    color: "inherit",
                  }}
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/electronics"
                  style={{
                    textDecoration: "inherit",
                    color: "inherit",
                  }}
                >
                  Electronics
                </NavLink>
              </Nav.Link>
              <NavDropdown title="Explore" id="collapsible-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink
                    to="/airconditioners"
                    style={{
                      textDecoration: "inherit",
                      color: "inherit",
                    }}
                  >
                    AirConditioners
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/televisions"
                    style={{
                      textDecoration: "inherit",
                      color: "inherit",
                    }}
                  >
                    Televisions
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/washingmachines"
                    style={{
                      textDecoration: "inherit",
                      color: "inherit",
                    }}
                  >
                    Washing Machines
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink
                    to="/allitems"
                    style={{
                      textDecoration: "inherit",
                      color: "inherit",
                    }}
                  >
                    All Items
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {user.authDataToken ? (
              <Nav>
                <Nav.Link>
                  {" "}
                  <NavLink
                    to="/userdashboard"
                    style={{
                      textDecoration: "inherit",
                      color: "inherit",
                    }}
                  >
                    Dashboard
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <NavLink
                    to="/userdashboard/cart"
                    style={{
                      textDecoration: "inherit",
                      color: "inherit",
                    }}
                  >
                    Cart
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <NavLink
                    to="/logout"
                    style={{
                      textDecoration: "inherit",
                      color: "inherit",
                    }}
                  >
                    Logout
                  </NavLink>
                </Nav.Link>{" "}
              </Nav>
            ) : (
              <Nav>
                <Nav.Link>
                  {" "}
                  <NavLink
                    to="/login"
                    style={{
                      textDecoration: "inherit",
                      color: "inherit",
                    }}
                  >
                    Login
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    to="/signup"
                    style={{
                      textDecoration: "inherit",
                      color: "inherit",
                    }}
                  >
                    Signup
                  </NavLink>
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
