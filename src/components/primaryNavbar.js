import React, { useState } from "react";
import Clock from "../media/clock.svg";
import Coins from "../media/coins.svg";
import Logo from "../media/logo.svg";
import { Link } from "react-router-dom";
import "../stylesheets/primaryNavbar.css";

const PrimaryNavbar = () => {
  let [questionNumber, setQuestionNumber] = useState(1);
  return (
    <div className="PNNavbox">
      <div className="PNBox1">
        <Link to="/" className="PNLogo">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="PNQuestionnobox">
          <span className="PNPresentQuestion">{questionNumber + "/"}</span>
          <span className="PNTotalQuestions">5</span>
        </div>
      </div>

      <div className="PNBox2">
        <div className="PNScore">
          <img src={Coins} alt="coins" />
          <span className="detailtext">1050</span>
        </div>

        <div className="PNTimer">
          <img src={Clock} alt="Timer" />
          <span className="detailtext">4:50</span>
        </div>

        <button className="PNExitButton">Exit</button>
      </div>
    </div>
  );
};

export default PrimaryNavbar;
