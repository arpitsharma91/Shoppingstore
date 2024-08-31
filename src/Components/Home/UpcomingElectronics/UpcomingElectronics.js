import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import CarouselImage1 from "../../../assets/images/ElectronicsRefrigerators.jpg";
import CarouselImage2 from "../../../assets/images/electronicsmobile.jpg";
import CarouselImage3 from "../../../assets/images/laptop-5673901_1280.jpg";
import "../Home.css";

function Upcomingelectronics() {
  return (
    <div>
      <h1 className="ReviewOuter">COMING SOON ON STORE</h1>
      <Carousel>
        <Carousel.Item>
          <Image src={CarouselImage1} text="First slide" />
          <Carousel.Caption>
            <h3>Refridgerators</h3>
            <p>Signup and subscribe to get updates</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={CarouselImage2} text="Second slide" />

          <Carousel.Caption>
            <h3>Smartphones</h3>
            <p>Signup and subscribe to get updates</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={CarouselImage3} text="Third slide" />
          <Carousel.Caption>
            <h3>Laptops</h3>
            <p>Signup and subscribe to get updates</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Upcomingelectronics;
