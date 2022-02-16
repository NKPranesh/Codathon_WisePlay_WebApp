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
  let [questions, setQuestions] = useState([]);

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
  let [name, setName] = useState("");
  let [difficulty, setDifficulty] = useState("");
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
  // let [questionOptions,setQuestionoptions] =useState([]);
  // let [answers,setAnswers] =useState([]);


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
          // setQuestionoptions(easyoptions);
          // setAnswers(easyanswers);
        } 
        if (responseJson.difficulty == "medium") {
           setQuestions(mediumquestions);
          //  setQuestionoptions(mediumoptions);
          //  setAnswers(mediumanswers);
         } 
         if(responseJson.difficulty=="hard") {
           setQuestions(difficultquestions);
        //  setQuestionoptions(difficultoptions);
        //  setAnswers(difficultanswers);
         }
      })
      .catch((error) => {
        console.log("error");
      });

    return 1;
  };

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
    getData();
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
                    // questionOptions={questionOptions}
                    // answers={answers}
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
