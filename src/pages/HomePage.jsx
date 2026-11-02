import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <main className="MainPageRoot">
      <h1>Welcome to Oren's Quest!</h1>
      <p>
        Embark on an epic adventure in a world filled with challenges and
        mysteries. Prepare to test your skills and courage as you navigate
        through the quest of a lifetime!
      </p>
      <Link to="/game" className="btn">
        Start Game
      </Link>
    </main>
  );
}

export default HomePage;
