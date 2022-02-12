import React, { useState } from "react";
import Clock from "../media/clock.svg";
import Coins from "../media/coins.svg";
import Logo from "../media/logo.svg";
import Flame from "../media/flame.svg";
import { Link } from "react-router-dom";
import "../stylesheets/secondaryNavbar.css";

const SecondaryNavbar = () => {
  let [questionNumber, setQuestionNumber] = useState(1);
  return (
    <div className="SNNavbox">
      <div className="SNBox1">
        <Link to="/" className="SNLogo">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="SNQuestionnobox">
          <span className="SNPresentQuestion">{questionNumber + "/"}</span>
          <span className="SNTotalQuestions">5</span>
        </div>
      </div>

      <div className="SNBox2">
      <div className="SNStreak">
          <p className="detailtext">Streak</p>
          <div className="SNStreakScore">
            <img src={Flame} alt="coins" />
            <span className="detailtext">2</span>
          </div>
        </div>
        <div className="SNScore">
          <img src={Coins} alt="coins" />
          <span className="detailtext">1050</span>
        </div>

        <div className="SNTimer">
          <img src={Clock} alt="Timer" />
          <span className="detailtext">4:50</span>
        </div>

        <button className="SNExitButton">Exit</button>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
