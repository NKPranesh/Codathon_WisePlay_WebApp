import React from "react";
import "../stylesheets/dashboardContent.css";
import SkaterGirl from "../media/Skater Girl.svg";
import Student from "../media/Studentimg.svg";
import Dashboard from "./dashboard";
import Profile from "./profile";

const DashboardContent = (props) => {
  return (
    <div className="DBContentDiv">
      <div className="DBTopNav">Welcome Nagveer!!</div>
      <div className="DBContent">
        <div className="DBTestArea">
          <span className="DBTestText">Take a test today.</span>
          <div className="DBTestFIled">
            <div className="DBStoryMode">
              <img src={SkaterGirl} alt="SkaterGirl" />
              <div className="DBstoryContent">
                <p className="DBStoryheading">Story Mode</p>
                <div className="DBStoryContentRight">
                  <p className="DBStoryInfo">
                    Track sales and customers on any device. Track sales and
                    customers on any device.
                  </p>
                  <div className="DBStartButton">
                    <button>Start Test</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="DBNormalMode">
              <img src={Student} alt="" />
              <div className="DBstoryContent">
                <p className="DBStoryheading">Normal Mode</p>
                <div className="DBStoryContentRight">
                  <p className="DBStoryInfo">
                    Track sales and customers on any device. Track sales and
                    customers on any device.
                  </p>
                  <div className="DBStartButton">
                    <button>Start Test</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dashboard testsData={props.testsData} />
        <Profile/>
      </div>
    </div>
  );
};

export default DashboardContent;
