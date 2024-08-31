import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useContext } from "react";
import UserContext from "../../shared/Context/UserContext";
import "./Ordersummarymodal.css";

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
      className="ModalHeader"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="ModalHeader">
          Your Order will be delivered soon, please check and confirm your final
          Order details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="m-3">{props.finaldetail.brand}</h4>
        <p className="m-3">{props.finaldetail.text}</p>
        <p className="m-3"> Price - {props.finalprice} /-</p>
      </Modal.Body>

      <div className="OrderSummaryButton">
        <Button variant="success" onClick={orderHandler}>
          Order
        </Button>
        <Button variant="danger" onClick={props.onHide}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
}

export default Ordersummarymodal;
