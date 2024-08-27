import { React, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../UserContext";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Button from "react-bootstrap/Button";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profimage1 from "../../assets/images/profileimage.jpg";
import profimage2 from "../../assets/images/profileimage2.jpg";
import profimage3 from "../../assets/images/profileimage3.jpg";
import Sale from "../SaleSection/SaleSection";
import Upcomingelectronics from "../UpcomingElectronics/UpcomingElectronics";

function Home() {
  const user = useContext(UserContext);
  useEffect(() => {
    user.checkAuthState();
  }, []);
  let navigate = useNavigate();

  return (
    <div>
      <Navigation />
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

      <Sale />
      <Upcomingelectronics />
      <div>
        <h1 className="ReviewOuter">What Our Customers Say</h1>
        <Container>
          <Row className="ReviewInner">
            <Col>
              <p style={{ textAlign: "justify", marginBottom: 30 }}>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content.
              </p>
              <Image src={profimage1} roundedCircle />
              <p style={{ margin: 30, fontWeight: 500 }}>Lisa Haris</p>
            </Col>
            <Col>
              <p style={{ textAlign: "justify", marginBottom: 30 }}>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content.
              </p>

              <Image src={profimage2} roundedCircle />

              <p style={{ margin: 30, fontWeight: 500 }}>Marie Doe</p>
            </Col>
            <Col>
              <p style={{ textAlign: "justify", marginBottom: 30 }}>
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content.
              </p>
              <Image src={profimage3} roundedCircle />
              <p style={{ margin: 30, fontWeight: 500 }}>John Doe</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
