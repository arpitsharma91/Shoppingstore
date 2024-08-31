import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import acImage from "../../../assets/images/eletronicsac.jpg";
import tvImage from "../../../assets/images/electronicstv.jpg";
import machineImage from "../../../assets/images/electronicwasmachine.jpg";
import "./SaleSection.css";
import Electroniclist from "../../Electroniclist/Electroniclist";

function Sale() {
  let saleData = [
    {
      key: "101",
      brand: "Daikin Dual Invertor A.C.",
      image: acImage, //image:"path"  will not work due to babel
      text: "9,500 BTU 115V Dual Inverter Window Air Conditioner with Wi-Fi Control",
      star: 3,
      price: 90000,
    },
    {
      key: "301",
      brand: "Samsung 65 inch LED",
      image: tvImage, //image:"path"  will not work due to babel
      text: "65 Inch TV: 4K Ultra HD LED Smart Google TV with Dolby Vision HDR",
      star: 3,
      price: 90000,
    },
    {
      key: "204",
      brand: "IFB Front-Load 10 K.G.",
      image: machineImage, //image:"path"  will not work due to babel
      text: "Full-Automatic Compact Washer with Wheels, 1.6 cu. ft, 11 lbs capacity",
      star: 3,
      price: 40000,
    },
  ];
  return (
    <div className="AllItemsOuter">
      {" "}
      <h1 className="AllItemsHeader">WELCOME TO SALE !!!</h1>
      <Container>
        <Row>
          {saleData.map((sale) => {
            return <Electroniclist key={sale.key} electronicdata={sale} />;
          })}
        </Row>
      </Container>
      <hr />
    </div>
  );
}

export default Sale;
