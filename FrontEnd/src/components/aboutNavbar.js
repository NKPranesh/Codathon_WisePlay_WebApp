import React from "react";
import Logo from "../media/logo.svg";
import { Link } from "react-router-dom";
import "../stylesheets/landingNavbar.css";

const AboutNavbar = () => {
  return (
    <div>
      <div className="LNMainDiv">
        <div className="LNLogoDiv">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <div className="LNLinksDiv">
          <Link to="/about" className="LNLink">
            <span>About</span>
          </Link>
          <Link to="/#LBDashboardID" className="LNLink">
            <span>Overview</span>
          </Link>
          <Link to="/#LBFaqID" className="LNLink">
            <span>FAQ</span>
          </Link>
        </div>
        <div className="LNButtonsDiv">
          <div className="LNLoginButton LNButton">
            <Link to="/login"> Login</Link>
          </div>
          <div className="LNSignupButton LNButton">
            <Link to="/signup"> Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNavbar;
