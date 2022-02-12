import React from "react";
import Options from "../components/options";
import Question from "../components/question";
import SecondaryNavbar from "../components/secondaryNavbar";
import "../stylesheets/SecondaryGame.css";

const SecondaryGame = () => {
  
  return (
    <div className="SGOuterDiv">
      <SecondaryNavbar />
      <div className="SGMainDiv">
          <Question />
          <Options />
      </div>
    </div>
  );
};

export default SecondaryGame;
