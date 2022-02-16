import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Options from "../components/options";
import Question from "../components/question";
import SecondaryNavbar from "../components/secondaryNavbar";
import "../stylesheets/SecondaryGame.css";
import "../stylesheets/question.css";
import Meme from "../components/meme";
import Loading from "../components/loading";
import RedirectToHomePage from "../components/redirectToHomePage";

let scores = [0, 0, 0, 0, 0];
let count = 0;
let qno = 0;
const SecondaryGame = () => {
  const [popupDisplay, setPopupDisplay] = useState(false);
  let questions = [
    "What is the average of first five multiples of 12?",
    "Pointing to a photograph of a boy Suresh said, He is the son of the only son of my mother. How is Suresh related to that boy?",
    "And yet it is one of the simplest ideas that anyone ever had. Here I want to persuade you how evolution explains the beginning of life on earth. Darwin uncovered the theory of evolution and the method of natural selection. The idea of evolution is probably one of the most important ideas that anyone has ever had. Today, thanks to Darwin, we know why life is the way it is. We can predict how life will be in the future. We can even postulate about the life on other planets. How amazing is that! What is the topic of the paragraph",
    "Look at this series: 31,29,24,22, 17, … what number should come next?",
    "Space exploration is a very exciting field of research. It is the frontier of Physics and no doubt will change the understanding of science. However, it does come at a cost. A normal space shuttle costs about 1.5 billion dollars to make. The annual budget of NASA, which is a premier space exploring organization is about $17 billion. So the question that some people ask is that whether it is worth it? What is the main idea in the paragraph?",
    "The constitution of India is very well written. It not only defines the need for fundamental human rights but also ensures that we do not abuse these laws. The access to justice is one such law but in the present political scenario, this right like other such rights has been hidden from the marginalized section of the society. As a result, we can say that for such classes of the society, there is no such thing as a constitution.The above paragraph says what about the Indian constitution?",
    "Sowmya Krishnan walked 20 m towards the north. Then she turned right and walks 30 m. Then she turns right and walks 35 m. Then she turns left and walks 15 m. Finally she turns left and walks 15 m. In which direction and how many meters is she from the starting position?",
    "An industry trade association found that more than 13,000 martial arts schools exist in the United States with nearly 6 million active members. Of the 13,000 schools, nearly 7,000 offered taekwondo lessons.",
    "JAK, KBL, LCM, MDN, ____",
    "Shoaib, Harshad, Preksha, and Yawer are four friends playing poker. In each hand, the individual player has to bet 800 rupees. Preksha wins three hands, Yawer wins two and the others win four hands each. The person who lost the most money is",
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
  let [loading, setLoading] = useState(false);

  let submitButtonHandle = async () => {
    setLoading(true);
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
          setLoading(false);
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
                <div>
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
              </div>
            </React.Fragment>
          ) : (
            <RedirectToHomePage />
          )}
        </div>
      </div>
      {popupDisplay && <Meme memeNumber={questionNumber} />}
      {loading && <Loading />}
    </React.Fragment>
  );
};

export default SecondaryGame;
