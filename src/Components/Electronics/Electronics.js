import { React } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import * as mockData from "../../shared/mockData/mockData";
import "./Electronics.css";
import Electroniclist from "../Electroniclist/Electroniclist";
function Electronics() {
  let navigate = useNavigate();
  const slicedacData = mockData.acData.slice(0, 3);
  const slicedtvData = mockData.tvData.slice(0, 3);
  const slicedmachineData = mockData.machineData.slice(0, 3);

  return (
    <div>
      <div className="ElectronicsOuter">
        <h1 className="ElectronicsHeader">AirConditioners</h1>
        <Container fluid>
          <Row>
            {slicedacData.map((ac) => {
              return <Electroniclist key={ac.key} electronicdata={ac} />;
            })}
          </Row>
        </Container>
        <div className="ElectronicsButton">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              navigate("/airconditioners");
            }}
          >
            VIEW All
          </Button>
        </div>
        <hr />
        <h1 className="ElectronicsHeader">Televisions</h1>
        <Container fluid>
          <Row>
            {slicedtvData.map((tv) => {
              return <Electroniclist key={tv.key} electronicdata={tv} />;
            })}
          </Row>
        </Container>
        <div className="ElectronicsButton">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              navigate("/televisions");
            }}
          >
            VIEW All
          </Button>
        </div>
        <hr />
        <h1 className="ElectronicsHeader">Washing Machines</h1>
        <Container fluid>
          <Row>
            {slicedmachineData.map((machine) => {
              return (
                <Electroniclist key={machine.key} electronicdata={machine} />
              );
            })}
          </Row>
        </Container>
        <div className="ElectronicsButton">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              navigate("/washingmachines");
            }}
          >
            VIEW All
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Electronics;

{
  /* <img
src={require("../../assets/img/allcourses.jpg")}
className={classes.courseListPageImage}
/> */
}
