import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import UserContext from "../../shared/Context/UserContext";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Ordersummarymodal from "../Ordersummarymodal/Ordersummarymodal";
import "./Dashboard.css";

function Cart() {
  const [modalShow, setModalShow] = useState(false);
  const user = useContext(UserContext);
  useEffect(() => {
    user.checkAuthState();
  }, []);
  const removeHandler = () => {
    user.cartRemoveHandler();
  };
  return (
    <div className="Cart">
      {user.cart.product.brand ? (
        <div>
          <h1 className="p-5">Your Cart</h1>
          <Container fluid>
            <Row>
              <Col>
                <Card className="m-2">
                  <Card.Body>
                    <Card.Title>{user.cart?.product.brand}</Card.Title>
                    <Card.Text>{user.cart?.product.text}</Card.Text>
                    <Card.Text>Price - {user.cart?.price} /- </Card.Text>
                    <Button
                      variant="success"
                      onClick={() => setModalShow(true)}
                      className="m-2"
                    >
                      Buy Now
                    </Button>
                    <Button
                      variant="danger"
                      className="m-2"
                      onClick={removeHandler}
                    >
                      Remove
                    </Button>
                    <Ordersummarymodal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      finaldetail={user.cart?.product}
                      finalprice={user.cart?.price}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <div>
          <h1>Your cart is empty.</h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
