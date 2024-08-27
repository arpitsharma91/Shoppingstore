import { React, useContext, useEffect } from "react";
import UserContext from "../../UserContext";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "../SaleSection/SaleSection.css";
import { acData } from "../../utility";
import Electroniclist from "../Electroniclist/Electroniclist";

function Airconditioners() {
  const user = useContext(UserContext);
  useEffect(() => {
    user.checkAuthState();
  }, []);
  return (
    <div>
      <Navigation />
      <div className="AllItemsOuter">
        <h1 className="AllItemsHeader">AirConditioners</h1>
        <Container fluid>
          <Row>
            {acData.map((ac) => {
              return <Electroniclist key={ac.key} electronicdata={ac} />;
            })}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Airconditioners;
