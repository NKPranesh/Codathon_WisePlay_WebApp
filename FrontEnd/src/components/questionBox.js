import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/questionBox.css";

let flag = 0;
var time = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let optionsOpted = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let ratio = [1, 4, 2, 3, 2];
const QuestionBox = (props) => {
  const [[prevMin, prevSec], setPrevTime] = useState([20, 0]);
  let [questions, setQuestions] = useState([]);
    let [options,setOptions] =useState([['','','','',]]);
  let [answers,setAnswers] =useState(['a']);
  let easyquestions = [
    "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
    "The angle of elevation of a ladder leaning against a wall is 60° and the foot of the ladder is 4.6 m away from the wall. The length of the ladder is:",
    "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
    "From a group of 7 men and 6 women, five persons are to be selected to form a committee so that at least 3 men are there on the committee. In how many ways can it be done?",
    "	Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
    "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
    "From a point P on a level ground, the angle of elevation of the top tower is 30°. If the tower is 100 m high, the distance of point P from the foot of the tower is:",
    "The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss incurred by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit?",
    "Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?",
    "A hollow iron pipe is 21 cm long and its external diameter is 8 cm. If the thickness of the pipe is 1 cm and iron weighs 8 g/cm3, then the weight of the pipe is:",
  ];

  let mediumquestions = [
    "The angle of elevation of a ladder leaning against a wall is 60° and the foot of the ladder is 4.6 m away from the wall. The length of the ladder is:",
    "A and B invest in a business in the ratio 3 : 2. If 5% of the total profit goes to charity and A's share is Rs. 855, the total profit is:",
    "From a group of 7 men and 6 women, five persons are to be selected to form a committee so that at least 3 men are there on the committee. In how many ways can it be doneFrom a group of 7 men and 6 women, five persons are to be selected to form a committee so that at least 3 men are there on the committee. In how many ways can it be done?",
    "An accurate clock shows 8 o'clock in the morning. Through how may degrees will the hour hand rotate when the clock shows 2 o'clock in the afternoon?",
    "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
    "Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour?",
    "The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss incurred by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit?",
    "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
    "A hollow iron pipe is 21 cm long and its external diameter is 8 cm. If the thickness of the pipe is 1 cm and iron weighs 8 g/cm3, then the weight of the pipe is:",
    "A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
  ];

  let difficultquestions = [
    "An aeroplane covers a certain distance at a speed of 240 kmph in 5 hours. To cover the same distance in 1 2/3 hours, it must travel at a speed of:",
    "A and B invest in a business in the ratio 3 : 2. If 5% of the total profit goes to charity and A's share is Rs. 855, the total profit is:",
    "A father said to his son, I was as old as you are at the present at the time of your birth. If the father's age is 38 years now, the son's age five years back was:",
    "An accurate clock shows 8 o'clock in the morning. Through how may degrees will the hour hand rotate when the clock shows 2 o'clock in the afternoon?",
    "Two pipes A and B can fill a cistern in 37.5 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",
    "Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour?",
    "A, B, C subscribe Rs. 50,000 for a business. A subscribes Rs. 4000 more than B and B Rs. 5000 more than C. Out of a total profit of Rs. 35,000, A receives:",
    "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
    "Seats for Mathematics, Physics and Biology in a school are in the ratio 5 : 7 : 8. There is a proposal to increase these seats by 40%, 50% and 75% respectively. What will be the ratio of increased seats?",
    "A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
  ];
  let easyoptions = [
    ["45 km/hr", "50 km/hr", "54 km/hr", "55 km/hr"],
    ["2.3 meters", "4.6 meters", "7.8 meters", "9.2 meters"],
    ["30 percent", "70 percent", "100 percent", "250 percent"],
    ["564 ways", "645 ways", "735 ways", "756 ways"],
    ["60 gallons", "100 gallons", "120 gallons", "180 gallons"],
    ["1  :  3", "3  :  2", "3  :  4", "None of these"],
    ["149 meters", "156 meters", "173 meters", "200 meters"],
    ["Rs. 2000", "Rs. 2200", "Rs. 2400", "Data inadequate"],
    ["1 hour", "2 hours", "6 hours", "8 hours"],
    ["3.6 Kilo grams", "3.696 Kilo grams", "36 Kilo grams", "36.9 Kilo grams"],
  ];
  let easyanswers = ["b", "d", "b", "d", "c", "b", "c", "a", "c", "b"];

  let mediumoptions = [
    ["2.3 meters", "4.6 meters", "7.8 meters", "9.2 meters"],
    ["Rupees. 1425", "Rupees. 1500", "Rupees. 1537.50", "Rupees. 1576"],
    ["564 ways", "645 ways", "735 ways", "756 ways"],
    ['144 degrees','150 degrees','168 degrees','180 degrees'],
    ["1  :  3", "3  :  2", "3  :  4", "None of these"],
    ['9 minutes','10 minutes','12 minutes','20 minutes'],
    ["Rs. 2000", "Rs. 2200", "Rs. 2400", "Data inadequate"],
    ['24 years','27 years','40 years','42 years'],
    ["3.6 Kilo grams", "3.696 Kilo grams", "36 Kilo grams", "36.9 Kilo grams"],
    ['20 hours','25 hours','35 hours','40 hours'],

  ];
  let mediumanswers = ['d','b','d','d','b','b','a','a','b','c'];

  let difficultoptions = [
    ["300  kmph", "360  kmph", "600  kmph", "720  kmph"],
    ["Rupees. 1425", "Rupees. 1500", "Rupees. 1537.50", "Rupees. 1576"],
    ['14 years','19 years','33 years','38 years'],
    ['144 degrees','150 degrees','168 degrees','180 degrees'],
    ['5 minutes','9 minutes','10 minutes','15 minutes'],
    ['9 minutes','10 minutes','12 minutes','20 minutes'],
    ['8400 Rupees','11900 Rupees','13600 Rupees','14700 Rupees'],
    ['24 years','27 years','40 years','42 years'],
    ['2 : 3 : 4','6 : 7 : 8','6 : 8 : 9','None of these'],
    ['20 hours','25 hours','35 hours','40 hours'],
  ];
  let difficultanswers = [
    "d",'b','a','d','b','b','d','a','a','c'
  ];

  let [name, setName] = useState("");
  let [difficulty, setDifficulty] = useState("");
  const getData = async () => {
    await fetch(process.env.React_App_Backend_domain + "/dashboard", {
      method: "get",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setName(responseJson.name);
        setDifficulty(responseJson.difficulty);
        if (responseJson.difficulty == "easy") {
          setQuestions(easyquestions);
          setOptions(easyoptions);
          setAnswers(easyanswers);
        } 
        if (responseJson.difficulty == "medium") {
           setQuestions(mediumquestions);
           setOptions(mediumoptions);
           setAnswers(mediumanswers);
         } 
         if(responseJson.difficulty=="hard") {
           setQuestions(difficultquestions);
         setOptions(difficultoptions);
         setAnswers(difficultanswers);
         }
      })
      .catch((error) => {
        console.log("error");
      });

    return 1;
  };

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
  useEffect(() => {
    getData();
  }, []);
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
              <input type="radio" value="a" name="options" />{" "}
              {options[props.questionNumber - 1][0]}
            </span>
            <span>
              <input type="radio" value="b" name="options" />{" "}
              {options[props.questionNumber - 1][1]}
            </span>
          </div>
          <div className="QBOptionsBottom">
            <span>
              <input type="radio" value="c" name="options" />{" "}
              {options[props.questionNumber - 1][2]}
            </span>
            <span>
              <input type="radio" value="d" name="options" />{" "}
              {options[props.questionNumber - 1][3]}
            </span>
          </div>
        </div>
      </div>
      <div className="QBButtonDiv">
        {props.questionNumber < 10 ? (
          <button
            className="QBNextButton"
            onClick={() => {
              if (
                answers[props.questionNumber - 1] ==
                document.querySelector('input[name="options"]:checked').value
              ) {
                optionsOpted[props.questionNumber - 1] = 1;
              }

              time[props.questionNumber - 1] =
                prevMin * 60 + prevSec - (props.min * 60 + props.sec);
              props.setTrait((props.questionNumber - 1) % 5);
              let minscore = 20;
              minscore =
                105 - time[props.questionNumber - 1] > minscore
                  ? 105 - time[props.questionNumber - 1]
                  : minscore;
              props.setTimetaken(
                (minscore * optionsOpted[props.questionNumber - 1]) / 2
              );
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
                  document.getElementsByClassName(
                    "QBNextButton"
                  )[0].style.display = "none";
                }, 1000);
                setTimeout(() => {
                  let animation = document.getElementsByClassName(
                    "Animation" + props.popOut
                  )[0];
                  animation.classList.add("popOutRight");
                  document.getElementsByClassName(
                    "QBNextButton"
                  )[0].style.display = "";
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
                  var radList = document.getElementsByName("options");
                  for (var i = 0; i < radList.length; i++) {
                    radList[i].checked = false;
                  }
                }, 4001);
              } else {
                props.setQuestionNumber(props.questionNumber + 1);
                props.setScore(props.score + (props.min * 60 + props.sec) * 10);
                var radList = document.getElementsByName("options");
                for (var i = 0; i < radList.length; i++) {
                  radList[i].checked = false;
                }
              }
            }}
          >
            Next
          </button>
        ) : (
          <button
            className="QBNextButton"
            onClick={() => {
              time[9] = prevMin * 60 + prevSec - (props.min * 60 + props.sec);
              if (
                answers[9] ==
                document.querySelector('input[name="options"]:checked').value
              ) {
                optionsOpted[9] = 1;
              }
              props.setTrait((props.questionNumber - 1) % 5);
              let minscore = 20;
              minscore =
                105 - time[props.questionNumber - 1] > minscore
                  ? 105 - time[props.questionNumber - 1]
                  : minscore;
              props.setTimetaken(
                (minscore * optionsOpted[props.questionNumber - 1]) / 2
              );
              props.setIsExit(true);
            }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionBox;
