import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createGame } from "../game.js";

function GamePage() {
  const gameHolderRef = useRef(null);

  useEffect(() => {
    const game = createGame(gameHolderRef.current);

    return () => {
      game.destroy(true);
    };
  }, []);

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
      <div className="GameHolder" ref={gameHolderRef}></div>
    </main>
  );
}

export default GamePage;
