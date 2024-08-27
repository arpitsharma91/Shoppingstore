import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useContext } from "react";
import UserContext from "../../UserContext";

function Ordersummarymodal(props) {
  const user = useContext(UserContext);
  const orderDetails = {
    name: user.userdata.name,
    address: user.userdata.address,
    region: user.userdata.region,
    zipcode: user.userdata.zipcpde,
    Product: props.finaldetail.brand,
    Price: props.finalprice,
  };
  const orderHandler = () => {
    console.log(orderDetails);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ textAlign: "center" }}
    >
      <Modal.Header>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ textAlign: "center" }}
        >
          Your Order will be delivered soon, please check and confirm your final
          Order details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="m-3">{props.finaldetail.brand}</h4>
        <p className="m-3">{props.finaldetail.text}</p>
        <p className="m-3"> Price - {props.finalprice} /-</p>
      </Modal.Body>
      <Modal.Footer
        style={{
          marginTop: "3em",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button onClick={orderHandler}>Order</Button>
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Ordersummarymodal;
