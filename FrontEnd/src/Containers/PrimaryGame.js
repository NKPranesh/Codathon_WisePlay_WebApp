import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Animation from "../components/animation";
import QuestionBox from "../components/questionBox";
import PrimaryNavbar from "../components/primaryNavbar";
import "../stylesheets/PrimaryGame.css";

const PrimaryGame = () => {
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

  return (
    <div className="PGOuterDiv">
      <PrimaryNavbar />
      <div className="PGMainDiv">
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
          />
        </div>
        <Animation popOut={popOut} />
      </div>
    </div>
  );
};

export default PrimaryGame;
