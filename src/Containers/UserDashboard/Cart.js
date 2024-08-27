import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import UserContext from "../../UserContext";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Ordersummarymodal from "../Ordersummarymodal/Ordersummarymodal";

function Cart() {
  const [modalShow, setModalShow] = useState(false);
  const user = useContext(UserContext);
  useEffect(() => {
    user.checkAuthState();
  }, []);
  return (
    <div style={{ backgroundColor: "#f3f3f3", textAlign: "center" }}>
      <Navigation />
      <div>
        <h1 style={{ margin: "1em" }}>Your Cart</h1>
        <Container fluid>
          <Row>
            <Col>
              <Card style={{ margin: "2em" }}>
                <Card.Body>
                  <Card.Title>{user.cart.product.brand}</Card.Title>
                  <Card.Text>{user.cart.product.text}</Card.Text>
                  <Card.Text>Price - {user.cart.price} /- </Card.Text>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
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
      <Footer />
    </div>
  );
}

export default Cart;
