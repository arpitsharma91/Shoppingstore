import { React } from "react";

import "../Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profimage1 from "../../../assets/images/profileimage.jpg";
import profimage2 from "../../../assets/images/profileimage2.jpg";
import profimage3 from "../../../assets/images/profileimage3.jpg";

function HomeReview() {
  return (
    <div>
      <h1 className="ReviewOuter">What Our Customers Say</h1>
      <Container>
        <Row className="ReviewInner">
          <Col>
            <p style={{ textAlign: "justify", marginBottom: 30 }}>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
            </p>
            <Image src={profimage1} roundedCircle />
            <p style={{ margin: 30, fontWeight: 500 }}>Lisa Haris</p>
          </Col>
          <Col>
            <p style={{ textAlign: "justify", marginBottom: 30 }}>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
            </p>

            <Image src={profimage2} roundedCircle />

            <p style={{ margin: 30, fontWeight: 500 }}>Marie Doe</p>
          </Col>
          <Col>
            <p style={{ textAlign: "justify", marginBottom: 30 }}>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
            </p>
            <Image src={profimage3} roundedCircle />
            <p style={{ margin: 30, fontWeight: 500 }}>John Doe</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeReview;
