import { React } from "react";
import { useNavigate } from "react-router";

import Button from "react-bootstrap/Button";
import "../Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomeOuter() {
  let navigate = useNavigate();
  return (
    <div className="Homeouter">
      <div className="Homeoverlay">
        <Container fluid>
          <Row>
            <Col>
              <h2 style={{ marginBottom: 50 }}>WELCOME TO SHOPPINGSTORE</h2>
              <p>LETS BRING ESSENTIALS TO YOUR HOME</p>
              <Button
                variant="outline-secondary"
                size="lg"
                style={{ fontWeight: 800 }}
                onClick={() => {
                  navigate("/electronics");
                }}
              >
                <i className="fas fa-arrow-right"> </i> EXPLORE
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomeOuter;
