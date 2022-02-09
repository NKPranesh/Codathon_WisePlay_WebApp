import React from "react";
import "../stylesheets/questionBox.css";

const QuestionBox = () => {
  let questions = [
    "Father Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
  ];

  let situations = [
    "Hey Nagveer, meet John. John likes to explore undiscovered places ,so he decided to visit a hotel today. Unfortunately he couldn’t remember the name of the hotel. Help John in remembering the name of the hotel by answering the question mentioned below.",
  ];

  return (
    <div className="QBMainDiv">
      <div className="QBSituationDiv">
        <span>{situations[0]}</span>
      </div>
      <div className="QBQuestionDiv">
        <div className="QBQuestion">{"Q. " + questions[0]}</div>
        <div className="QBOptions">
          <div className="QBOptionsTop">
            <span>
              <input type="radio" value="a" name="options" /> 2.56
            </span>
            <span>
              <input type="radio" value="b" name="options" /> 2.56
            </span>
          </div>
          <div className="QBOptionsBottom">
            <span>
              <input type="radio" value="c" name="options" /> 2.56
            </span>
            <span>
              <input type="radio" value="d" name="options" /> 2.56
            </span>
          </div>
        </div>
      </div>
      <div className="QBButtonDiv">
        <button className="QBNextButton">Next</button>
      </div>
    </div>
  );
};

export default QuestionBox;
