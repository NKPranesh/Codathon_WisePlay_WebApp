import React from "react";
import "../stylesheets/questionBox.css";

const QuestionBox = (props) => {
  let questions = [
    "Father Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "Father2 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "Father3 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "Father4 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "Father5 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
  ];

  let situations = [
    "Hey Nagveer, meet John. John likes to explore undiscovered places ,so he decided to visit a hotel today. Unfortunately he couldn’t remember the name of the hotel. Help John in remembering the name of the hotel by answering the question mentioned below.",
    "Hey Nagveer2, meet John. John likes to explore undiscovered places ,so he decided to visit a hotel today. Unfortunately he couldn’t remember the name of the hotel. Help John in remembering the name of the hotel by answering the question mentioned below.",
    "Hey Nagveer3, meet John. John likes to explore undiscovered places ,so he decided to visit a hotel today. Unfortunately he couldn’t remember the name of the hotel. Help John in remembering the name of the hotel by answering the question mentioned below.",
    "Hey Nagveer4, meet John. John likes to explore undiscovered places ,so he decided to visit a hotel today. Unfortunately he couldn’t remember the name of the hotel. Help John in remembering the name of the hotel by answering the question mentioned below.",
    "Hey Nagveer5, meet John. John likes to explore undiscovered places ,so he decided to visit a hotel today. Unfortunately he couldn’t remember the name of the hotel. Help John in remembering the name of the hotel by answering the question mentioned below.",
  ];

  return (
    <div className="QBMainDiv">
      <div className="QBSituationDiv">
        <span>{situations[props.popOut - 1]}</span>
      </div>
      <div className="QBQuestionDiv">
        <div className="QBQuestion">{"Q. " + questions[props.popOut - 1]}</div>
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
        <button
          className="QBNextButton"
          onClick={() => {
            props.animate();
            let nextAnimation = props.popOut + 1;
            setTimeout(() => {
              let newAnimation = document.getElementsByClassName(
                "Animation" + nextAnimation
              )[0];
              newAnimation.classList.remove("popInLeft");
            }, 10001);
            setTimeout(() => {
              let animation = document.getElementsByClassName(
                "Animation" + props.popOut
              )[0];
              animation.classList.add("popOutRight");
            }, 4000);

            setTimeout(() => {
              document.getElementsByClassName(
                "Animation" + props.popOut
              )[0].style.display = "none";
              props.setPopOut(props.popOut + 1);
            }, 7001);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionBox;
