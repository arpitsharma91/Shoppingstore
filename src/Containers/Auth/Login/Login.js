import { useState, useContext, useEffect } from "react";
import UserContext from "../../../shared/Context/UserContext";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  const [validated, setValidated] = useState(false);
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
    returnSecureToken: true,
  });

  const user = useContext(UserContext);
  useEffect(() => {
    user.checkAuthState();
  }, []);
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
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
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    setValidated(true);
  };

  return (
    <React.Fragment>
      <Card className="LoginOuter">
        <Form noValidate validated={validated} className="LoginForm">
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

          <Button variant="primary" type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
        <div className="LoginBottom">
          <span>New User ??? </span>
          <Link to="/signup">
            <Button variant="link" className="LoginBottomButton">
              SignUp
            </Button>
          </Link>
        </div>
      </Card>
    </React.Fragment>
  );
}

export default Login;

// localStorage.removeItem("token");
//   localStorage.removeItem("expirationDate");
//   localStorage.removeItem("userId");
