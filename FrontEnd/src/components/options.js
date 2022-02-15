
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/options.css";

let flag = 0;
var time = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let optionsOpted = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let ratio=[1,4,2,3,2];
let selectedOption='e';
const Options = (props) => {
  const [[prevMin, prevSec], setPrevTime] = useState([10, 0]);
  let questionOptions = [
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

  return (
    <React.Fragment>
    <div className="OPMainDiv">
      <div className="OPOptions">
        <span
          className="OPA"
          onClick={() => {
            move("OPA");
            selectedOption='a';
          }}
        >
          {questionOptions[props.questionNumber-1][0]}
        </span>
        <span
          className="OPB"
          onClick={() => {
            move("OPB");
            selectedOption='b';
          }}
        >
          {questionOptions[props.questionNumber-1][1]}
        </span>
        <span
          className="OPC"
          onClick={() => {
            move("OPC");
            selectedOption='c';
          }}
        >
          {questionOptions[props.questionNumber-1][2]}
        </span>
        <span
          className="OPD"
          onClick={() => {
            move("OPD");
            selectedOption='d';
          }}
        >
          {questionOptions[props.questionNumber-1][3]}
        </span>
      </div>
      <div className="OPButtonDiv">
        <div className="OPButtonDiv">
        {props.questionNumber < 10 ? (
          <button className="OPNextButton"
          onClick={() => {
            if(answers[props.questionNumber - 1]==selectedOption){
              optionsOpted[props.questionNumber - 1]=1;
            }
            time[props.questionNumber - 1] =
              prevMin * 60 + prevSec - (props.min * 60 + props.sec);
              props.setTrait((props.questionNumber-1)%5);
              let minscore=20;
              minscore= 100-time[props.questionNumber - 1]>minscore? 100-time[props.questionNumber - 1]:minscore;
              props.setTimetaken((((minscore)*optionsOpted[props.questionNumber - 1])/(2)));
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
              setTimeout(() => {
                props.setPopupDisplay(false);
                square.style.filter = "";
                square.style.height = "";
                square.style.overflow = "";                
              },5000);
              props.setQuestionNumber(props.questionNumber + 1);
                props.setScore(props.score + (props.min * 60 + props.sec) * 10);
            } else {
                props.setQuestionNumber(props.questionNumber + 1);
                props.setScore(props.score + (props.min * 60 + props.sec) * 10);
            }
            move("OPE");
            selectedOption='e';
          }}
          >Next</button>)
          :
          (<button className="QBNextButton" onClick={()=>{
            time[9] = prevMin * 60 + prevSec - (props.min * 60 + props.sec);
            if(answers[9]==selectedOption){
              optionsOpted[9]=1;
              
                  }
                  props.setTrait((props.questionNumber-1)%5);
              let minscore=20;
              minscore= 105-time[props.questionNumber - 1]>minscore? 105-time[props.questionNumber - 1]:minscore;
              props.setTimetaken((((minscore)*optionsOpted[props.questionNumber - 1])/(2)));
                  props.setPopupDisplay(true);
              var square = document.getElementById("SGMainDivID");
              square.style.filter = "blur(6px)";
                square.style.height = "100vh";
                square.style.overflow = "hidden";
              setTimeout(() => {
                props.setPopupDisplay(false);
                square.style.filter = "";
                square.style.height = "";
                square.style.overflow = "";
                
              },2000);
              setTimeout(()=> {
                props.setIsExit(true);
              },1000);

          }}>
            Submit
          </button>)
    }
        </div>
      </div>
    </div>
    
    </React.Fragment>
  );
};

export default Options;
