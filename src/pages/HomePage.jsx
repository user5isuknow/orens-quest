import React from "react";
import { useState, useEffect } from "react";
import "../HomePageStyles.css";
import { Link } from "react-router-dom";
import useWindowSize from "../Components/windoeSize";
import youtubeLinkImage from "../assests/WebPageComponites/youtubeLogo.png";
import githubLinkLogo from "../assests/WebPageComponites/github-logo-550x70.png";
import discordLinkLogo from "../assests/WebPageComponites/discord-logo-550x70.png";

console.log(window.innerHeight);
console.log(window.innerWidth);
var BoxAmount = Math.round(window.innerHeight / 60);
console.log(BoxAmount);

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
        {Array.from({ length: BoxAmount }, (_, index) => (
          <div
            key={index}
            className={`box${Math.floor(Math.random() * 3) + 1}`}
            style={{
              animationDuration: `${Math.random() * 11 + 10}s`,
            }}
          />
        ))}
      </div>
      <h1 className="MainWelcomeTitle">Welcome to Oren's Quest!</h1>
      <div className="divider1"></div>
      <div className="itemBoxHolderOne">
        <div className="ItemBoxOne"></div>
        <div className="textBoxOne">
          <h1 className="textOneHeader"> About us</h1>
          <p1 className="textOneParagraph">
            Planing to make a game that will be hosted on the web with the basic
            idea about using math to attack and hit enemys. Using f (x) and y =
            equations you would be able to hit and attack them using that math.
            the game engine it will use is phaser which is an open source light
            weight game engine that will let us complete this game. It will be a
            semi open world game with guides on what you are meant to do but
            also let you make most of your own desitions.
          </p1>
        </div>
      </div>
      <div className="divider2"></div>
      <div className="itemBoxHolderTwo">
        <div className="textBox2">
          <div className="textTwoContent">
            <h2 className="textTwoHeader">Links</h2>
            <div className="divider1"></div>
            <a
              href="https://www.youtube.com/channel/UCuBCqjk81BdTKJGwGbPI32g"
              className="textTwoLinks"
            >
              <img src={youtubeLinkImage} alt="YouTube" />
            </a>
            <div className="divider1"></div>
            <a
              href="https://github.com/user5isuknow/orens-quest"
              className="textTwoLinks"
            >
              <img src={githubLinkLogo} alt="GitHub" />
            </a>
            <div className="divider1"></div>
            <a href="https://discord.gg/p8cxgTR4uy" className="textTwoLinks">
              <img src={discordLinkLogo} alt="Discord" />
            </a>
            <div className="divider1"></div>
          </div>
        </div>
      </div>
      <div className="divider1"></div>
    </main>
  );
}

export default HomePage;
