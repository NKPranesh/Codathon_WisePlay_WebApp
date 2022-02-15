import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Options from "../components/options";
import Question from "../components/question";
import SecondaryNavbar from "../components/secondaryNavbar";
import "../stylesheets/SecondaryGame.css";
import "../stylesheets/question.css";
import Meme from "../components/meme";
import RedirectToHomePage from "../components/redirectToHomePage";

let scores = [0, 0, 0, 0, 0];
let count = 0;
let qno = 0;
const SecondaryGame = () => {
  const [popupDisplay, setPopupDisplay] = useState(false);
  let questions = [
    "Father Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "Pointing to a photograph of a boy Suresh said, He is the son of the only son of my mother. How is Suresh related to that boy?",
    "Father3 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "Look at this series: 31,29,24,22, 17, … what number should come next?",
    "Space exploration is a very exciting field of research. It is the frontier of Physics and no doubt will change the understanding of science. However, it does come at a cost. A normal space shuttle costs about 1.5 billion dollars to make. The annual budget of NASA, which is a premier space exploring organization is about $17 billion. So the question that some people ask is that whether it is worth it? What is the main idea in the paragraph?",
    "Father6 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "Sowmya Krishnan walked 20 m towards the north. Then she turned right and walks 30 m. Then she turns right and walks 35 m. Then she turns left and walks 15 m. Finally she turns left and walks 15 m. In which direction and how many meters is she from the starting position?",
    "Father8 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
    "JAK, KBL, LCM, MDN, ____",
    "Father10 Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
  ];
  let [score, setScore] = useState(0);
  let [trait, setTrait] = useState(5);
  let [timetaken, setTimetaken] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  let [questionNumber, setQuestionNumber] = useState(1);
  const navigate = useNavigate();
  const [isExit, setIsExit] = useState(false);
  const [over, setOver] = useState(false);
  let submitButtonHandle = async () => {
    await fetch(process.env.React_App_Backend_domain + "/newTestData", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        newTestData: scores,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setTimeout(() => {
          navigate("/resultpage");
        }, 4001);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (isExit && count == 0) {
    count++;
    submitButtonHandle();
  }
  if (trait < 5 && qno != questionNumber) {
    scores[trait] += timetaken;
    setTrait(5);
    qno = questionNumber;
  }
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
  return (
    <React.Fragment>
      <div className="SGOuterDiv" id="SGMainDivID">
        <SecondaryNavbar
          setIsExit={setIsExit}
          questionNumber={questionNumber}
          score={score}
          min={min}
          sec={sec}
          setMin={setMin}
          setSec={setSec}
          over={over}
          setOver={setOver}
        />
        <div className="SGMainDiv">
          {!over ? (
            <React.Fragment>
              <div className="SGInnerDiv">
                <div className="QNQuestion">
                  {questions[questionNumber - 1]}
                </div>
                <Options
                  setPopupDisplay={setPopupDisplay}
                  setIsExit={setIsExit}
                  setTimetaken={setTimetaken}
                  setTrait={setTrait}
                  setQuestionNumber={setQuestionNumber}
                  questionNumber={questionNumber}
                  setMin={setMin}
                  score={score}
                  setScore={setScore}
                  setSec={setSec}
                  min={min}
                  sec={sec}
                />
              </div>
            </React.Fragment>
          ) : (
            <RedirectToHomePage />
          )}
        </div>
      </div>
      {popupDisplay && <Meme memeNumber={questionNumber}/>}
    </React.Fragment>
  );
};

export default SecondaryGame;
