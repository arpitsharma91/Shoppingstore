import React from "react";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../shared/Context/UserContext";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Ordersummarymodal from "../Ordersummarymodal/Ordersummarymodal";
import "./Dashboard.css";
import Cart from "./Cart";

function UserDashboard(props) {
  const [modalShow, setModalShow] = useState(false);
  const user = useContext(UserContext);
  useEffect(() => {
    user.checkAuthState();
  }, []);
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="UserDashboardOuter">
        <h3 className="UserDashboardInner">Your Dashboard</h3>
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
                <Cart />
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">hello</Tab.Pane>
              <Tab.Pane eventKey="#link2">Tab pane content 3</Tab.Pane>
              <Tab.Pane eventKey="#link3">Tab pane content 4</Tab.Pane>
              <Tab.Pane eventKey="#link5">Tab pane content 5</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </React.Fragment>
  );
}

export default UserDashboard;
