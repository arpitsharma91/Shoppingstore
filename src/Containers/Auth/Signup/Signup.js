import { useState, useContext } from "react";
import UserContext from "../../../UserContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Navigation from "../../Navigation/Navigation";
import Footer from "../../Footer/Footer";
import React from "react";
import Card from "react-bootstrap/Card";

function Signup(props) {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState("");
  const [zipcode, setZipcode] = useState("");
  const user = useContext(UserContext);
  let formdata = {},
    signupdata = {};

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const orderHandler = () => {
    formdata = {
      regname: name,
      regemail: email,
      regpassword: password,
      regaddress: address,
      regregion: region,
      regzipcode: zipcode,
    };
    signupdata = { email: email, password: password, returnSecureToken: true };
    console.log(formdata);
    console.log(signupdata);
    user.registeruserData(formdata);
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAj-Hc6Goyiwq9uIcbBLBX1HdgVkQLT4ds",
        signupdata
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Navigation />

      <Card style={{ margin: "5em ", padding: "2em", textAlign: "center" }}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="validationCustom01" className="mb-3">
            <Form.Control
              required
              type="text"
              placeholder="FullName"
              defaultValue={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom02" className="mb-3">
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              defaultValue={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom03" className="mb-3">
            <Form.Control
              required
              type="password"
              placeholder="Password"
              defaultValue={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationCustom04" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Complete Address"
              required
              defaultValue={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom05" className="mb-3">
            <Form.Control
              type="text"
              placeholder="State"
              required
              defaultValue={region}
              onChange={(event) => {
                setRegion(event.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom06" className="mb-3">
            <Form.Control
              type="text"
              placeholder="ZipCode"
              required
              defaultValue={zipcode}
              onChange={(event) => {
                setZipcode(event.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit">Submit form</Button>
          <Button type="button" onClick={orderHandler}>
            Order
          </Button>
        </Form>
      </Card>

      <Footer />
    </React.Fragment>
  );
}

export default Signup;
