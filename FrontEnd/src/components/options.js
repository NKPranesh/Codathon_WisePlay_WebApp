import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/options.css";

let flag = 0;
var time = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let optionsOpted = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let ratio = [1, 4, 2, 3, 2];
let selectedOption = "e";
const Options = (props) => {

  let [questionOptions,setQuestionoptions] =useState([['','','','',]]);
  let [answers,setAnswers] =useState(['a']);
  let [name, setName] = useState("");
  let [difficulty, setDifficulty] = useState("");

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
          setQuestionoptions(easyoptions);
          setAnswers(easyanswers);
        }
        if (responseJson.difficulty == "medium") {
          setQuestionoptions(mediumoptions);
          setAnswers(mediumanswers);
        } 
        if(responseJson.difficulty=="hard") {
          setQuestionoptions(difficultoptions);
          setAnswers(difficultanswers);
        }
      })
      .catch((error) => {
        console.log("error");
      });

    return 1;
  };


  const [[prevMin, prevSec], setPrevTime] = useState([20, 0]);
  const navigate = useNavigate();
  let move = (className) => {
    let options = ["OPA", "OPB", "OPC", "OPD"];
    for (let i = 0; i < options.length; i++) {
      let option = document.getElementsByClassName(options[i])[0];
      if (className === options[i]) {
        option.style.transform = "translateY(-20px)";
      } else {
        option.style.transform = "translateY(0px)";
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <div className="OPMainDiv">
        <div className="OPOptions">
          <span
            className="OPA"
            onClick={() => {
              move("OPA");
              selectedOption = "a";
            }}
          >
            {questionOptions[props.questionNumber - 1][0]}
          </span>
          <span
            className="OPB"
            onClick={() => {
              move("OPB");
              selectedOption = "b";
            }}
          >
            {questionOptions[props.questionNumber - 1][1]}
          </span>
          <span
            className="OPC"
            onClick={() => {
              move("OPC");
              selectedOption = "c";
            }}
          >
            {questionOptions[props.questionNumber - 1][2]}
          </span>
          <span
            className="OPD"
            onClick={() => {
              move("OPD");
              selectedOption = "d";
            }}
          >
            {questionOptions[props.questionNumber - 1][3]}
          </span>
        </div>
        <div className="OPButtonDiv">
          <div className="OPButtonDiv">
            {props.questionNumber < 10 ? (
              <button
                className="OPNextButton"
                onClick={() => {
                  if (answers[props.questionNumber - 1] == selectedOption) {
                    optionsOpted[props.questionNumber - 1] = 1;
                  }
                  time[props.questionNumber - 1] =
                    prevMin * 60 + prevSec - (props.min * 60 + props.sec);
                  props.setTrait((props.questionNumber - 1) % 5);
                  let minscore = 20;
                  minscore =
                    100 - time[props.questionNumber - 1] > minscore
                      ? 100 - time[props.questionNumber - 1]
                      : minscore;
                  props.setTimetaken(
                    (minscore * optionsOpted[props.questionNumber - 1]) / 2
                  );
                  // if((props.questionNumber - 1)%5 == 0)
                  // {
                  //   props.setTimetaken((((100-time[props.questionNumber - 1])*optionsOpted[props.questionNumber - 1])/(2*ratio[(props.questionNumber - 1)%5])));
                  // }
                  // else if((props.questionNumber - 1)%5 == 1)
                  // {
                  //   props.setTimetaken((((100-time[props.questionNumber - 1])*optionsOpted[props.questionNumber - 1])/(2*ratio[(props.questionNumber - 1)%5])));
                  // }
                  // else if((props.questionNumber - 1)%5 == 2)
                  // {
                  //   props.setTimetaken(((100-time[props.questionNumber - 1])*optionsOpted[props.questionNumber - 1])/(2*ratio[(props.questionNumber - 1)%5]));
                  // }
                  // else if((props.questionNumber - 1)%5 == 3)
                  // {
                  //   props.setTimetaken(((100-time[props.questionNumber - 1])*optionsOpted[props.questionNumber - 1])/(2*ratio[(props.questionNumber - 1)%5]));
                  // }
                  // else if((props.questionNumber - 1)%5 == 4)
                  // {
                  //   props.setTimetaken(((100-time[props.questionNumber - 1])*optionsOpted[props.questionNumber - 1])/(2*ratio[(props.questionNumber - 1)%5]));
                  // }
                  setPrevTime([props.min, props.sec]);
                  flag = flag + 1;
                  if (flag % 2 == 0) {
                    props.setPopupDisplay(true);
                    var square = document.getElementById("SGMainDivID");
                    square.style.filter = "blur(6px)";
                    square.style.height = "100vh";
                    square.style.overflow = "hidden";
                    square.style.pointerEvents = "none";
                    setTimeout(() => {
                      props.setPopupDisplay(false);
                      square.style.filter = "";
                      square.style.height = "";
                      square.style.overflow = "";
                      square.style.pointerEvents = "";
                    }, 2000);
                    props.setQuestionNumber(props.questionNumber + 1);
                    props.setScore(
                      props.score + (props.min * 60 + props.sec) * 10
                    );
                  } else {
                    props.setQuestionNumber(props.questionNumber + 1);
                    props.setScore(
                      props.score + (props.min * 60 + props.sec) * 10
                    );
                  }
                  move("OPE");
                  selectedOption = "e";
                }}
              >
                Next
              </button>
            ) : (
              <button
                className="QBNextButton"
                onClick={() => {
                  time[9] =
                    prevMin * 60 + prevSec - (props.min * 60 + props.sec);
                  if (answers[9] == selectedOption) {
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
                  props.setPopupDisplay(true);
                  var square = document.getElementById("SGMainDivID");
                  square.style.filter = "blur(6px)";
                  square.style.height = "100vh";
                  square.style.overflow = "hidden";
                  square.style.pointerEvents = "none";
                  setTimeout(() => {
                    props.setPopupDisplay(false);
                    square.style.filter = "";
                    square.style.height = "";
                    square.style.overflow = "";
                    square.style.pointerEvents = "";
                  }, 2000);
                  setTimeout(() => {
                    props.setIsExit(true);
                  }, 1000);
                }}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Options;
