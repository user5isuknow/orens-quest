import React from "react";
import { Link } from "react-router-dom";

function GamePage() {
  return (
    <main className="GamePageRoot">
      <div className="hstack gap-1">
        <Link to="/" className="btn">
          home page
        </Link>
        <Link to="/guide" className="p-2 ms-auto btn">
          guide
        </Link>
        <Link to="/settings" className="btn">
          settings
        </Link>
      </div>
      <div className="GameHolder"></div>
    </main>
  );
}

export default GamePage;
