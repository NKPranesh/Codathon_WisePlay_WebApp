import React from "react";
import Animation from "../components/animation";
import QuestionBox from "../components/questionBox";
import PrimaryNavbar from "../components/primaryNavbar";
import "../stylesheets/PrimaryGame.css";

const PrimaryGame = () => {
  return (
    <div className="PGOuterDiv">
      <PrimaryNavbar />
      <div className="PGMainDiv">
        <div className="PGLeftDiv">
          <iframe
            className="Butterflies"
            src="butterflies/index.html"
            height="150px"
            width="250px"
            frameBorder="0"
          ></iframe>
          <QuestionBox />
        </div>
        <Animation />
      </div>
    </div>
  );
};

export default PrimaryGame;
