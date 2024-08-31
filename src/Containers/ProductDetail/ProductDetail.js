import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React, { useState, useContext } from "react";
import UserContext from "../../shared/Context/UserContext";
import Ordersummarymodal from "../Ordersummarymodal/Ordersummarymodal";
import { useParams } from "react-router-dom";
import { acData, machineData, tvData } from "../../shared/mockData/mockData";
import "./ProductDetail.css";
import { Link } from "react-router-dom";

function Productdetail() {
  const [modalShow, setModalShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [c, setC] = useState(false);

  const { productId } = useParams();
  const user = useContext(UserContext);
  let allData = [...acData, ...machineData, ...tvData];
  const thisProduct = allData.find((prod) => prod.key === productId);
  //.filter not working, key not in quotes not working
  console.log(thisProduct);

  const quantitydecrementHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      return;
    }
  };
  const quantityincrementHandler = () => {
    setQuantity(quantity + 1);
  };

  const finalprice = quantity * thisProduct.price;

  const cartdetailsHandler = () => {
    user.cartHandler(thisProduct, finalprice);
  };
  return (
    <React.Fragment>
      <div className="ProductDetailOuter">
        <Card className="ProductDetailInner">
          <Card.Img
            variant="top"
            src={thisProduct.image}
            className="ProductDetailImage"
          />
          <Card.Body>
            <Card.Title>{thisProduct.brand}</Card.Title>
            <Card.Text>{thisProduct.text}</Card.Text>

            <ListGroup>
              <ListGroup.Item>
                <li>Bought by 20k+ Customers</li>
              </ListGroup.Item>
              <ListGroup.Item>
                <li>Energy-saving</li>
              </ListGroup.Item>
              <ListGroup.Item>
                <li>20% off on next purchase</li>
              </ListGroup.Item>
              <ListGroup.Item>
                <li>Home service visits</li>
              </ListGroup.Item>
              <ListGroup.Item>
                <li>12-months warranty</li>
              </ListGroup.Item>
            </ListGroup>

            <ButtonToolbar
              aria-label="Toolbar with button groups"
              className="ProductDetailToolbar"
            >
              <ButtonGroup style={{ margin: "auto" }}>
                <Button onClick={quantitydecrementHandler}>-</Button>
                <span className="ProductDetailQuantity">{quantity}</span>

                <Button onClick={quantityincrementHandler}>+</Button>
              </ButtonGroup>
            </ButtonToolbar>
            <Card.Title className="ProductDetailPrice mt-2">
              Price - {finalprice} /-
            </Card.Title>

            <div className="ProductDetailBottom">
              <Button variant="primary" onClick={() => setModalShow(true)}>
                Buy Now
              </Button>
              <Link to="/userdashboard/cart">
                <Button variant="primary" onClick={cartdetailsHandler}>
                  Add To Cart
                </Button>
              </Link>
            </div>
            <Ordersummarymodal
              show={modalShow}
              onHide={() => setModalShow(false)}
              finaldetail={thisProduct}
              finalprice={finalprice}
            />
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Productdetail;
