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
    " [72 – 12 ÷ by 3 – 2 ]+ ( 18 – 6) ÷ 4",
    "How is father’s brother daughter related to you?",
    "Many people think of teeth as bone, but they are not made of bones. Actually, they are made of tissues. The main function of teeth is to chew and bite food. Humans have four types of teeth, Incisors, Premolars, Molars and Canines.Teeth are made of …….",
    "Look at the series 7,14,21,28, … What number should come next?",
    "Lord Vishnu is one of the most famous Gods in Hinduism. It’s written in the Puranas that the wife of Lord Vishnu is Lakshmi. He is considered to be the sustainer of the world. It’s believed that he lives in the Kshira Sagara that is also known as the ocean of milk. There are many temples related to Lord Vishnu all over India. Badrinath and Jagannath are very famous temples. Who is the wife of Lord Vishnu?",
    "4(10+15÷5×4-2×2)",
    "Mr Deepak Mohan walks 5 km towards the south and then turns to the right. After walking 3 km he turns to the left and walks 5 km. What direction is he facing right now?",
    ". Atul and Pratul are stepbrothers and they are twins. They study in the same class, so sometimes teachers get confused to recognize them. They eat lunch together and play in the playground together. Atul is nine years old and Pratul is eight and a half years old.Who is nine years old?",
    "B2CD, __________, BCD4, B5CD, BC6D",
    "Dilip Kumar was a well-known name in the 20th century. He was born in Pakistan. After coming to India, he became a very versatile actor. His real name was Mohammad Yusuf Khan. At the age of 44, he married Saira Banu whose age was 22 years at the time of marriage. Dilip Kumar was honoured with Dadasaheb Phalke in 1995. He played tragic roles in many movies, so he was also called the Tragedy King.At what age did Dileep Kumar get married?",
  ];

  let options = [
    ['75','69','82','44'],
    ['cousin','mother','Daughter','Aunt'],
    ['Bones','Tissues','Flesh','Cells'],
    ['32','35','39','40'],
    ['Saraswathi','Lakshmi','Parvati','Durga'],
    ['58','72','64','73'],
    ['West','South','North-East','South-West'],
    ['Atul','Pratul','Both','None of them'],
    ['B2C2D','BC3D','BC3D','BCD7'],
    ['22','20','44','23'],
  ];

  let answers = ["b", "a", "b", "b", "b", "c", "b", "a", "b", "c"];

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
              <input type="radio" value="a" name="options" /> {options[props.questionNumber-1][0]}
            </span>
            <span>
              <input type="radio" value="b" name="options" /> {options[props.questionNumber-1][1]}
            </span>
          </div>
          <div className="QBOptionsBottom">
            <span>
              <input type="radio" value="c" name="options"/> {options[props.questionNumber-1][2]}
            </span>
            <span>
              <input type="radio" value="d" name="options" /> {options[props.questionNumber-1][3]}
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
                props.setTrait((props.questionNumber-1)%5);
              let minscore=20;
              minscore= 105-time[props.questionNumber - 1]>minscore? 105-time[props.questionNumber - 1]:minscore;
              props.setTimetaken((((minscore)*optionsOpted[props.questionNumber - 1])/(2)));
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
                  var radList = document.getElementsByName('options');
                for (var i = 0; i < radList.length; i++) {
                  radList[i].checked = false;
                }
                }, 4001);
              } else {
                  props.setQuestionNumber(props.questionNumber + 1);
                  props.setScore(props.score + (props.min * 60 + props.sec) * 10);
                  var radList = document.getElementsByName('options');
                for (var i = 0; i < radList.length; i++) {
                  radList[i].checked = false;
                }
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
          }
          props.setTrait((props.questionNumber-1)%5);
          let minscore=20;
          minscore= 105-time[props.questionNumber - 1]>minscore? 105-time[props.questionNumber - 1]:minscore;
          props.setTimetaken((((minscore)*optionsOpted[props.questionNumber - 1])/(2)));
          props.setIsExit(true);
          }}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionBox;
