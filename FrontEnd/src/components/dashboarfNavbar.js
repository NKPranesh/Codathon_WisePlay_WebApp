import React, { useState } from "react";
import Logo from "../media/logo.svg";
import Homeicon from "../media/homeicon.svg";
import Bargraphicon from "../media/bargrapghicon.svg";
import Profileicon from "../media/profileicon.svg";
import Logouticon from "../media/logouticon.svg";
import "../stylesheets/dashboardNavbar.css";
const DashboardNavbar = () => {
  let [selected, setSelected] = useState("home");

  return (
    <div>
      <div className="dbNavdiv">
        <div className="dblogo">
          <img src={Logo} />
        </div>
        <a href="#">
          <div
            className={
              selected === "home"
                ? "dbNavbarComponent Selected"
                : "dbNavbarComponent"
            }
            onClick={() => {
              setSelected("home");
            }}
          >
            <div className="dbNavabarCompimg">
              <img src={Homeicon} />
            </div>
            <div className="dbNavbarComptext">
              <span>Home</span>
            </div>
          </div>
        </a>
        <a href="#">
          <div
            className={
              selected === "dashboard"
                ? "dbNavbarComponent Selected"
                : "dbNavbarComponent"
            }
            onClick={() => {
              setSelected("dashboard");
            }}
          >
            <div className="dbNavabarCompimg">
              <img src={Bargraphicon} />
            </div>
            <div className="dbNavbarComptext">
              <span>Dashboard</span>
            </div>
          </div>
        </a>
        <a href="#">
          <div
            className={
              selected === "profile"
                ? "dbNavbarComponent Selected"
                : "dbNavbarComponent"
            }
            onClick={() => {
              setSelected("profile");
            }}
          >
            <div className="dbNavabarCompimg">
              <img src={Profileicon} />
            </div>
            <div className="dbNavbarComptext">
              <span>Profile</span>
            </div>
          </div>
        </a>
        <a href="#">
          <div
            className={
              selected === "logout"
                ? "dbNavbarComponent Selected"
                : "dbNavbarComponent"
            }
            onClick={() => {
              setSelected("logout");
            }}
          >
            <div className="dbNavabarCompimg">
              <img src={Logouticon} />
            </div>
            <div className="dbNavbarComptext">
              <span>Logout</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default DashboardNavbar;
