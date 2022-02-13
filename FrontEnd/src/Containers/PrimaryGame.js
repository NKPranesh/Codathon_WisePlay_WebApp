import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Animation from "../components/animation";
import QuestionBox from "../components/questionBox";
import PrimaryNavbar from "../components/primaryNavbar";
import "../stylesheets/PrimaryGame.css";
import RedirectToHomePage from "../components/redirectToHomePage";

const PrimaryGame = () => {
  const [min,setMin]=useState(0);
  const [sec,setSec]=useState(0);
  let [questionNumber, setQuestionNumber] = useState(1);
  const [score, setScore]= useState(0);
  const navigate = useNavigate();

  const authenticate = async () => {
    let isAuthenticated = false;

    await fetch(process.env.React_App_Backend_domain + "/authenticate", {
      method: "get",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if ("status" in responseJson) {
          isAuthenticated = true;
        }
      })
      .catch((error) => {
        console.log("error");
        isAuthenticated = false;
        navigate("/login");
      });

    return isAuthenticated;
  };

  useEffect(() => {
    authenticate();
  }, []);

  let animate = () => {
    let frame = document.getElementById(
      "HomeAnimation" + popOut
    ).contentDocument;
    let newEvent = new KeyboardEvent("keydown", {
      key: "a",
      code: "KeyA",
      location: 0,
      ctrlKey: false,
      shiftKey: false,
      altKey: false,
      metaKey: false,
      repeat: false,
      isComposing: false,
      charCode: 0,
      keyCode: 65,
      which: 65,
    });
    frame.dispatchEvent(newEvent);
    console.log("hello");
  };

  let [popOut, setPopOut] = useState(1);
  const [over, setOver] = useState(false);

  return (
    <div className="PGOuterDiv">
      <PrimaryNavbar questionNumber={questionNumber} score={score} min={min} sec={sec}setMin={setMin} setSec={setSec} over={over} setOver={setOver}/>
      <div className="PGMainDiv">
      {!over ?
      <>
        <div className="PGLeftDiv">
          <iframe
            className="Butterflies"
            src="butterflies/index.html"
            height="150px"
            width="250px"
            frameBorder="0"
          ></iframe>
          <QuestionBox
            animate={animate}
            setPopOut={setPopOut}
            popOut={popOut}
            setQuestionNumber={setQuestionNumber}
            questionNumber={questionNumber}
            setMin={setMin}
            score={score}
            setScore={setScore}
            setSec={setSec} min={min} sec={sec}

            
          />
        </div>
        <Animation popOut={popOut} />
        </>
        : <RedirectToHomePage/> }
      </div>
    </div>
  );
};

export default PrimaryGame;
