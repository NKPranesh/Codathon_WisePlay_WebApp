import React from "react";
import { Link } from "react-router-dom";
import Logo from "../media/logo.svg";
import "../stylesheets/resultpage.css";
const ResultNavbar = () => {
  return (
    <div>
      <div className="RSMainDiv">
        <div className="RSLogoDiv">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <div className="RSButton">
          <Link to="/Dashboard">Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default ResultNavbar;
