import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/questionBox.css";

let flag = 0;
var time = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let optionsOpted = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let ratio=[1,4,2,3,2];
const QuestionBox = (props) => {
  const [[prevMin, prevSec], setPrevTime] = useState([10, 0]);
  let questions = [
    "Father Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "Father2 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "Father3 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "Father4 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "Father5 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "Father6 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "Father7 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "Father8 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "Father9 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "Father10 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
  ];

  let options = [
    ['2.56','2.56','2.56','2.56'],
    ['2.56','2.56','2.56','2.56'],
    ['2.56','2.56','2.56','2.56'],
    ['2.56','2.56','2.56','2.56'],
    ['2.56','2.56','2.56','2.56'],
    ['2.56','2.56','2.56','2.56'],
    ['2.56','2.56','2.56','2.56'],
    ['2.56','2.56','2.56','2.56'],
    ['2.56','2.56','2.56','2.56'],
    ['2.56','2.56','2.56','2.56'],
  ];

  let answers = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"];

  let situations = [
    "Hey Nagveer, meet John. John likes to explore undiscovered places ,so he decided to visit a hotel today. Unfortunately he couldn’t remember the name of the hotel. Help John in remembering the name of the hotel by answering the question mentioned below.",
    "Hey Nagveer2, meet John. John likes to explore undiscovered places ,so he decided to visit a hotel today. Unfortunately he couldn’t remember the name of the hotel. Help John in remembering the name of the hotel by answering the question mentioned below.",
    "Hey Nagveer3, meet John. John likes to explore undiscovered places ,so he decided to visit a hotel today. Unfortunately he couldn’t remember the name of the hotel. Help John in remembering the name of the hotel by answering the question mentioned below.",
    "Hey Nagveer4, meet John. John likes to explore undiscovered places ,so he decided to visit a hotel today. Unfortunately he couldn’t remember the name of the hotel. Help John in remembering the name of the hotel by answering the question mentioned below.",
    "Hey Nagveer5, meet John. John likes to explore undiscovered places ,so he decided to visit a hotel today. Unfortunately he couldn’t remember the name of the hotel. Help John in remembering the name of the hotel by answering the question mentioned below.",
    "Hey Nagveer6, meet John. John likes to explore undiscovered places ,so he decided to visit a hotel today. Unfortunately he couldn’t remember the name of the hotel. Help John in remembering the name of the hotel by answering the question mentioned below.",
    "Hey Nagveer7, meet John. John likes to explore undiscovered places ,so he decided to visit a hotel today. Unfortunately he couldn’t remember the name of the hotel. Help John in remembering the name of the hotel by answering the question mentioned below.",
    "Hey Nagveer8, meet John. John likes to explore undiscovered places ,so he decided to visit a hotel today. Unfortunately he couldn’t remember the name of the hotel. Help John in remembering the name of the hotel by answering the question mentioned below.",
    "Hey Nagveer9, meet John. John likes to explore undiscovered places ,so he decided to visit a hotel today. Unfortunately he couldn’t remember the name of the hotel. Help John in remembering the name of the hotel by answering the question mentioned below.",
    "Hey Nagveer10, meet John. John likes to explore undiscovered places ,so he decided to visit a hotel today. Unfortunately he couldn’t remember the name of the hotel. Help John in remembering the name of the hotel by answering the question mentioned below.",
  ];

  const navigate = useNavigate();

  let next

  return (
    <div className="QBMainDiv">
      <div className="QBSituationDiv">
        <span>{situations[props.questionNumber - 1]}</span>
      </div>
      <div className="QBQuestionDiv">
        <div className="QBQuestion">
          {"Q. " + questions[props.questionNumber - 1]}
        </div>
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
              <input type="radio" value="c" name="options"/> 2.56
            </span>
            <span>
              <input type="radio" value="d" name="options" /> 2.56
            </span>
          </div>
        </div>
      </div>
      <div className="QBButtonDiv">
        {props.questionNumber < 10 ? (
          <button
            className="QBNextButton"
            onClick={() => {
              if(answers[props.questionNumber - 1]==document.querySelector('input[name="options"]:checked').value){
                optionsOpted[props.questionNumber - 1]=1;
              }
              time[props.questionNumber - 1] =
                prevMin * 60 + prevSec - (props.min * 60 + props.sec);
                if((props.questionNumber - 1)%5 == 0)
                {
                  props.setSpeed(props.speed+((100-time[props.questionNumber - 1])*optionsOpted[props.questionNumber - 1])/(2*ratio[(props.questionNumber - 1)%5]));
                }
                else if((props.questionNumber - 1)%5 == 1)
                {
                  props.setDeep(props.deep+((100-time[props.questionNumber - 1])*optionsOpted[props.questionNumber - 1])/(2*ratio[(props.questionNumber - 1)%5]));
                }
                else if((props.questionNumber - 1)%5 == 2)
                {
                  props.setMemory(props.memory+((100-time[props.questionNumber - 1])*optionsOpted[props.questionNumber - 1])/(2*ratio[(props.questionNumber - 1)%5]));
                }
                else if((props.questionNumber - 1)%5 == 3)
                {
                  props.setLogic(props.logic+((100-time[props.questionNumber - 1])*optionsOpted[props.questionNumber - 1])/(2*ratio[(props.questionNumber - 1)%5]));
                }
                else if((props.questionNumber - 1)%5 == 4)
                {
                  props.setFocus(props.focus+((100-time[props.questionNumber - 1])*optionsOpted[props.questionNumber - 1])/(2*ratio[(props.questionNumber - 1)%5]));
                }
              setPrevTime([props.min, props.sec]);
              flag = flag + 1;
              if (flag % 2 == 0) {
                props.animate();
                let nextAnimation = props.popOut + 1;
                setTimeout(() => {
                  let newAnimation = document.getElementsByClassName(
                    "Animation" + nextAnimation
                  )[0];
                  newAnimation.classList.remove("popInLeft");
                }, 10001);
                setTimeout(() => {
                  document.getElementsByClassName('QBNextButton')[0].style.display="none";
                }, 1000);
                setTimeout(() => {
                  let animation = document.getElementsByClassName(
                    "Animation" + props.popOut
                  )[0];
                  animation.classList.add("popOutRight");
                  document.getElementsByClassName('QBNextButton')[0].style.display="";
                }, 4000);

                setTimeout(() => {
                  document.getElementsByClassName(
                    "Animation" + props.popOut
                  )[0].style.display = "none";
                }, 7001);
                setTimeout(() => {
                  props.setPopOut(props.popOut + 1);
                  props.setQuestionNumber(props.questionNumber + 1);
                  props.setScore(
                    props.score + (props.min * 60 + props.sec) * 10
                  );
                }, 4001);
              } else {
                  props.setQuestionNumber(props.questionNumber + 1);
                  props.setScore(props.score + (props.min * 60 + props.sec) * 10);
              }
            }}
          >
            Next
          </button>
        ) : (
          <button className="QBNextButton" onClick={()=>{
            time[9] = prevMin * 60 + prevSec - (props.min * 60 + props.sec);
    if(answers[9]==document.querySelector('input[name="options"]:checked').value){
      optionsOpted[9]=1;
      props.setFocus(props.focus+((100-time[9])*optionsOpted[9])/(2*ratio[(9)%5]));
          props.setIsExit(true);
          }
          }}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionBox;
