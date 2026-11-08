import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="MainPageRoot">
      <div className="TopHeaderBackground">
        <h1 className="MainTitle">Oren's Quest!</h1>
        <Link to="/game" className="StartLink">
          Start adventure
        </Link>
      </div>
      <div className="banner">
        <box
          className="box1"
          style={{
            animationDuration: `${Math.floor(Math.random() * 11) + 10}s`,
          }}
        />
        <box
          className="box2"
          style={{
            animationDuration: `${Math.floor(Math.random() * 11) + 10}s`,
          }}
        />
        <box
          className="box1"
          style={{
            animationDuration: `${Math.floor(Math.random() * 11) + 10}s`,
          }}
        />
        <box
          className="box3"
          style={{
            animationDuration: `${Math.floor(Math.random() * 11) + 10}s`,
          }}
        />
        <box
          className="box2"
          style={{
            animationDuration: `${Math.floor(Math.random() * 11) + 10}s`,
          }}
        />
        <box
          className="box2"
          style={{
            animationDuration: `${Math.floor(Math.random() * 11) + 10}s`,
          }}
        />
        <box
          className="box1"
          style={{
            animationDuration: `${Math.floor(Math.random() * 11) + 10}s`,
          }}
        />
        <box
          className="box2"
          style={{
            animationDuration: `${Math.floor(Math.random() * 11) + 10}s`,
          }}
        />
        <box
          className="box1"
          style={{
            animationDuration: `${Math.floor(Math.random() * 11) + 10}s`,
          }}
        />
        <box
          className="box1"
          style={{
            animationDuration: `${Math.floor(Math.random() * 11) + 10}s`,
          }}
        />
        <box
          className="box3"
          style={{
            animationDuration: `${Math.floor(Math.random() * 11) + 10}s`,
          }}
        />
        <box
          className="box2"
          style={{
            animationDuration: `${Math.floor(Math.random() * 11) + 10}s`,
          }}
        />
        <box
          className="box1"
          style={{
            animationDuration: `${Math.floor(Math.random() * 11) + 10}s`,
          }}
        />
      </div>
      <h1 className="MainWelcomeTitle">Welcome to Oren's Quest!</h1>
      <div className="divider"></div>
      <div className="itemBoxHolderOne">
        <box className="ItemBoxOne"></box>
        <box className="textBoxOne"></box>
      </div>
    </main>
  );
}

export default HomePage;
