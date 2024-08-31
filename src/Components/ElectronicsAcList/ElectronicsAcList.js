import { React, useContext, useEffect } from "react";
import UserContext from "../../shared/Context/UserContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../Electronics/Electronics.css";
import { acData } from "../../shared/mockData/mockData";
import Electroniclist from "../Electroniclist/Electroniclist";

function Airconditioners() {
  return (
    <div>
      <div className="ElectronicsOuter">
        <h1 className="ElectronicsHeader">AirConditioners</h1>
        <Container fluid>
          <Row>
            {acData.map((ac) => {
              return <Electroniclist key={ac.key} electronicdata={ac} />;
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Airconditioners;
