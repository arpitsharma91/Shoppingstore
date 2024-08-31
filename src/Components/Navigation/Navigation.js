import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../shared/Context/UserContext";
import "./Navigation.css";

function Navigation(props) {
  const user = useContext(UserContext);
  let navigate = useNavigate();
  useEffect(() => {
    user.checkAuthState();
  }, []);
  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("userId");
    user.logout();
    navigate("/");
  };
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
            <NavLink to="/" className="ToolbarLink">
              ShoppingStore
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink to="/" className="ToolbarLink">
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/electronics" className="ToolbarLink">
                  Electronics
                </NavLink>
              </Nav.Link>
              <NavDropdown
                title="Explore"
                id="collapsible-nav-dropdown"
                className="ToolbarLink"
              >
                <NavDropdown.Item>
                  <NavLink to="/airconditioners" className="ToolbarLink">
                    AirConditioners
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/televisions" className="ToolbarLink">
                    Televisions
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/washingmachines" className="ToolbarLink">
                    Washing Machines
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to="/allitems" className="ToolbarLink">
                    All Items
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {user.authDataToken ? (
              <Nav>
                <Nav.Link>
                  {" "}
                  <NavLink to="/userdashboard" className="ToolbarLink">
                    Dashboard
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <NavLink to="/userdashboard/cart" className="ToolbarLink">
                    Cart
                  </NavLink>
                </Nav.Link>
                <Nav.Link className="ToolbarLink" onClick={onLogout}>
                  Logout
                </Nav.Link>{" "}
              </Nav>
            ) : (
              <Nav>
                <Nav.Link>
                  {" "}
                  <NavLink to="/login" className="ToolbarLink">
                    Login
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
