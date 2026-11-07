import React from "react";
import "../styles.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <motion.main
        className="MainPageRoot"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="TopHeaderBackground">
          <h1 className="MainTitle">Oren's Quest!</h1>
          <Link to="/game" className="StartLink">
            Start adventure
          </Link>
        </div>
        <div className="OpeningBanner">
          <div className="banner"></div>
          <div className="orbit">
            <span className="rectangle" />
            <span className="rectangle" />
          </div>
          <h1 className="MainWelcomeTitle">Welcome to Oren's Quest!</h1>
        </div>
        <div className="divider"></div>
        <div className="itemBoxHolderOne">
          <box className="ItemBoxOne"></box>
          <box className="textBoxOne"></box>
        </div>
      </motion.main>
    </>
  );
}

export default HomePage;
