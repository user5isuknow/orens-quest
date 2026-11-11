import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createGame } from "../game.js";
import "./GamePageStyles.css";
import { Button } from "bootstrap";
import { motion } from "framer-motion";

function GamePage() {
  return (
    <main className="GamePageRoot">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -70 }}
        transition={{ delay: 3, duration: 1 }}
        className="TopHeader"
      >
        <Link to="/" className="HomePageLink">
          homepage
        </Link>
        <button className="ShowHeader btn">show</button>
      </motion.div>
      <div className="GameHolder">{createGame}</div>
    </main>
  );
}

export default GamePage;
