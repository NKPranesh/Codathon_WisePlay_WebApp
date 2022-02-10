import React from "react";
import Logo from "../media/logo.svg";
import { Link } from "react-router-dom";
import "../stylesheets/landingNavbar.css";

const LandingNavbar = () => {
  return (
    <div>
      <div className="LNMainDiv">
        <div className="LNLogoDiv">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <div className="LNLinksDiv">
          <a href="#" className="LNLink">
            <span>About</span>
          </a>
          <a href="#" className="LNLink">
            <span>Overview</span>
          </a>
          <a href="#" className="LNLink">
            <span>FAQ</span>
          </a>
        </div>
        <div className="LNButtonsDiv">
          <div className="LNLoginButton LNButton">
            <Link to="/"> Login</Link>
          </div>
          <div className="LNSignupButton LNButton">
            <Link to="/"> Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingNavbar;
