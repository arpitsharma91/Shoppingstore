import { React, useContext, useEffect } from "react";
import UserContext from "../../UserContext";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { acData, machineData, tvData } from "../../utility";
import "../SaleSection/SaleSection.css";
import Electroniclist from "../Electroniclist/Electroniclist";
function Electronics() {
  const user = useContext(UserContext);
  useEffect(() => {
    user.checkAuthState();
  }, []);
  let navigate = useNavigate();
  const slicedacData = acData.slice(0, 3);
  const slicedtvData = tvData.slice(0, 3);
  const slicedmachineData = machineData.slice(0, 3);

  return (
    <div>
      <Navigation />
      <div className="AllItemsOuter">
        <h1 className="AllItemsHeader">AirConditioners</h1>
        <Container fluid>
          <Row>
            {slicedacData.map((ac) => {
              return <Electroniclist key={ac.key} electronicdata={ac} />;
            })}
          </Row>
        </Container>
        <div style={{ textAlign: "center", marginBottom: "4em" }}>
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
        <h1 className="AllItemsHeader">Televisions</h1>
        <Container fluid>
          <Row>
            {slicedtvData.map((tv) => {
              return <Electroniclist key={tv.key} electronicdata={tv} />;
            })}
          </Row>
        </Container>
        <div style={{ textAlign: "center", marginBottom: "4em" }}>
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
        <h1 className="AllItemsHeader">Washing Machines</h1>
        <Container fluid>
          <Row>
            {slicedmachineData.map((machine) => {
              return (
                <Electroniclist key={machine.key} electronicdata={machine} />
              );
            })}
          </Row>
        </Container>
        <div style={{ textAlign: "center", marginBottom: "4em" }}>
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
      <Footer />
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
