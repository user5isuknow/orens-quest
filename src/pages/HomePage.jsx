import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import PlaceHolder from "/src/assests/WebPageComponites/HomePageBannerPlaceHolder.jpeg"
function HomePage() {
  return (
    <><main className="MainPageRoot">
        <div className="TopHeaderBackground">
          <h1 className="MainTitle">Oren's Quest!</h1>
          <Link to="/game" className="btn StartLink">Start adventer </Link>
        </div>
        <div className="OpeningBanner">
          <img src={PlaceHolder} alt="web page banner placeholder"className="banner "/>
        </div>
        <div className="ScollingBoxAnimations">  
          <img src={PlaceHolder} alt="web page banner placeholder"className="ItemBox"/>
        </div>
      </main> </>

  );
}

export default HomePage;
