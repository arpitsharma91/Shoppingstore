import { useState, useContext } from "react";
import UserContext from "../../../UserContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navigation from "../../Navigation/Navigation";
import Footer from "../../Footer/Footer";
import React from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
function Login() {
  const [validated, setValidated] = useState(false);
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
    returnSecureToken: true,
  });

  const user = useContext(UserContext);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const checkHandler = () => {
    console.log(logindata);

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAj-Hc6Goyiwq9uIcbBLBX1HdgVkQLT4ds",
        logindata
      )
      .then((response) => {
        console.log(response);
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.localId);
        user.login(
          response.data.idToken,
          expirationDate,
          response.data.localId
        );
        user.checkAuthTimeout(response.data.expiresIn);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <Navigation />
      <Card style={{ margin: "5em 20em" }}>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          style={{ margin: " 3em 1em", textAlign: "center" }}
        >
          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => {
                setLogindata({ ...logindata, email: event.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="validationCustom01" className="mb-5">
            <Form.Control
              required
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setLogindata({
                  ...logindata,
                  password: event.target.value,
                });
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button type="button" onClick={checkHandler}>
            chk
          </Button>
        </Form>
      </Card>
      <Footer />
    </React.Fragment>
  );
}

export default Login;

// localStorage.removeItem("token");
//   localStorage.removeItem("expirationDate");
//   localStorage.removeItem("userId");
