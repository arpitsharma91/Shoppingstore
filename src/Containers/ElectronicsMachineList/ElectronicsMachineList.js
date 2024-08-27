import React from "react";
import { useContext, useEffect } from "react";
import UserContext from "../../UserContext";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { machineData } from "../../utility";
import "../SaleSection/SaleSection.css";
import Electroniclist from "../Electroniclist/Electroniclist";

function Washingmachine() {
  const user = useContext(UserContext);
  useEffect(() => {
    user.checkAuthState();
  }, []);
  return (
    <React.Fragment>
      <Navigation />
      <div className="AllItemsOuter">
        <h1 className="AllItemsHeader">WashingMachines</h1>
        <Container fluid>
          <Row>
            {machineData.map((machine) => {
              return (
                <Electroniclist key={machine.key} electronicdata={machine} />
              );
            })}
          </Row>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Washingmachine;
