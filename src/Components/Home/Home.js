import { React } from "react";
import "./Home.css";
import HomeOuter from "./HomeOuter/HomeOuter";
import Sale from "./SaleSection/SaleSection";
import Upcomingelectronics from "./UpcomingElectronics/UpcomingElectronics";
import HomeReview from "./HomeReview/HomeReview";

function Home() {
  return (
    <div>
      <HomeOuter />
      <Sale />
      <Upcomingelectronics />
      <HomeReview />
    </div>
  );
}

export default Home;
