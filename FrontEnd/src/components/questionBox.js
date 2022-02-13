import React,{useState} from "react";
import "../stylesheets/questionBox.css";
let flag=0;
var time = [0,0,0,0,0,0,0,0,0,0];
const QuestionBox = (props) => {
  const [[prevMin,prevSec],setPrevTime]=useState([10,0]);
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

  let answerOptions =['a','a','a','a','a','a','a','a','a','a',];
  let optionsOpted = [];

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

  return (
    <div className="QBMainDiv">
      <div className="QBSituationDiv">
        <span>{situations[props.questionNumber - 1]}</span>
      </div>
      <div className="QBQuestionDiv">
        <div className="QBQuestion">{"Q. " + questions[props.questionNumber - 1]}</div>
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
        {props.questionNumber<10 ?
          <button
            className="QBNextButton"
            onClick={() => {
              time[props.questionNumber-1]=(prevMin*60+prevSec)-(props.min*60+props.sec);
              setPrevTime([props.min,props.sec]);
              console.log(time);
              flag=flag+1;
              if(flag%2==0){
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
                  }, 7001);
                  setTimeout(() => {
                    props.setPopOut(props.popOut + 1);
                    props.setQuestionNumber(props.questionNumber + 1);
                    props.setScore(props.score + (props.min*60 + props.sec)*10);
                  },4001);
              }
              else{
                setTimeout(() => {
                  props.setQuestionNumber(props.questionNumber + 1);
                  props.setScore(props.score + (props.min*60 + props.sec)*10);
                },1001);
              }
              
              
            }}
          >
            Next
          </button>
          : <button
          className="QBNextButton"
          onClick={() => {

          }}
        >
          Submit
        </button>
        }
      </div>
    </div>
  );
};

export default QuestionBox;
