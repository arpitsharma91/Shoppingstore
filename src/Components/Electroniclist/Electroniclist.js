import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Ordersummarymodal from "../../Containers/Ordersummarymodal/Ordersummarymodal";
import "./ElectronicList.css";

function Electroniclist(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Col>
      <Card className="ElecItemsWrapper">
        <Link to={`/products/${props.electronicdata.key}`}>
          <Card.Img variant="top" src={props.electronicdata.image} />
        </Link>
        <Card.Body>
          <Card.Title>{props.electronicdata.brand}</Card.Title>
          <Card.Text>{props.electronicdata.text}</Card.Text>
          {props.electronicdata.star}

          <i className="fas fa-solid fa-star" style={{ color: "yellow" }}></i>
          <Card.Text>Price - {props.electronicdata.price} /- </Card.Text>
          <div className="ElecItemsButton">
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Buy Now
            </Button>

            <Link to={`/products/${props.electronicdata.key}`}>
              <Button variant="primary">Details</Button>
            </Link>
          </div>
          <Ordersummarymodal
            show={modalShow}
            onHide={() => setModalShow(false)}
            finaldetail={props.electronicdata}
            finalprice={props.electronicdata.price}
          />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Electroniclist;
