import React, { useState } from "react";
import "../stylesheets/dashboardContent.css";
import SkaterGirl from "../media/Skater Girl.svg";
import Student from "../media/Studentimg.svg";
import Dashboard from "./dashboard";
import Profile from "./profile";
import { Link } from "react-router-dom";

const DashboardContent = (props) => {
  return (
    <div className="DBContentDiv">
      <div className="DBTopNav">Welcome {props.name}!!</div>
      <div className="DBContent">
        {!props.isprofile ? (
          <React.Fragment>
            <div className="DBTestArea">
              <span className="DBTestText">Take a test today.</span>
              <div className="DBTestFIled">
                <div className="DBStoryMode">
                  <img src={SkaterGirl} alt="SkaterGirl" />
                  <div className="DBstoryContent">
                    <p className="DBStoryheading">Story Mode</p>
                    <div className="DBStoryContentRight">
                      <p className="DBStoryInfo">
                        The assessment will be in the form of a story and as the
                        story proceeds some situations arise and logical
                        questions will be asked based on those situations.
                      </p>
                      <div className="DBStartButton">
                        <Link to="/primarygame">
                          <button>Start Test</button>
                        </Link>
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
                        Appropriate colors were used which would keep student
                        more focused and To keep the students motivated memes
                        will be displayed.
                      </p>
                      <div className="DBStartButton">
                        <Link to="/secondarygame">
                          <button>Start Test</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Dashboard testsData={props.testsData} />
          </React.Fragment>
        ) : (
          <Profile />
        )}
      </div>
    </div>
  );
};

export default DashboardContent;
