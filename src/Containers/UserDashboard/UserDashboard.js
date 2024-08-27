import React from "react";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../UserContext";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Ordersummarymodal from "../Ordersummarymodal/Ordersummarymodal";

function UserDashboard(props) {
  const [modalShow, setModalShow] = useState(false);
  const user = useContext(UserContext);
  useEffect(() => {
    user.checkAuthState();
  }, []);
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <Navigation />
      <div style={{ padding: "5em", backgroundColor: "#333333" }}>
        <h3 style={{ color: "#ffffff", textAlign: "center" }}>
          Your Dashboard
        </h3>
      </div>

      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={3}>
            <ListGroup variant="flush">
              <ListGroup.Item action href="#link1">
                My Cart
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                My Orders
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Delivery Address
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Update Profile details
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                Raise a query/support
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <div
                  style={{ backgroundColor: "#f3f3f3", textAlign: "center" }}
                >
                  <h1 style={{ padding: "1em" }}>Your Cart</h1>
                  <Container fluid>
                    <Row>
                      <Col>
                        <Card style={{ margin: "2em" }}>
                          <Card.Body>
                            <Card.Title>{user.cart.product.brand}</Card.Title>
                            <Card.Text>{user.cart.product.text}</Card.Text>
                            <Card.Text>Price - {user.cart.price} /- </Card.Text>
                            <Button
                              variant="primary"
                              onClick={() => setModalShow(true)}
                            >
                              Buy Now
                            </Button>
                            <Ordersummarymodal
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                              finaldetail={user.cart.product}
                              finalprice={user.cart.price}
                            />
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">hello</Tab.Pane>
              <Tab.Pane eventKey="#link2">Tab pane content 3</Tab.Pane>
              <Tab.Pane eventKey="#link3">Tab pane content 4</Tab.Pane>
              <Tab.Pane eventKey="#link5">Tab pane content 5</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      <Footer />
    </React.Fragment>
  );
}

export default UserDashboard;
