import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../stylesheets/signupBox.css";

const SignupBox = () => {
  const [error, setError] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("none");
  const navigate = useNavigate();

  let signupButtonHandle = async () => {
    let email = document.getElementsByClassName("SBEmailInput")[0];
    let password = document.getElementsByClassName("SBPasswordInput")[0];
    let confirmPassword = document.getElementsByClassName(
      "SBConfirmPasswordInput"
    )[0];
    let name = document.getElementsByClassName("SBNameInput")[0];

    if (password.value !== confirmPassword.value) {
      setErrorDisplay("block");
      setError("Password do not match");
      return;
    }

    await fetch(process.env.React_App_Backend_domain + "/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        name: name.value,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if ("user" in responseJson) {
          setErrorDisplay("none");
          setError("");
          navigate("/dashboard");
        } else {
          let errorsArr = Object.values(responseJson.errors);
          for (let i = 0; i < errorsArr.length; i++) {
            if (errorsArr[i] !== "") {
              setErrorDisplay("block");
              setError(errorsArr[i]);
              break;
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="SignupBoxDiv">
      <div className="SBHeadDiv">Signup</div>
      <div className="SBBodyDiv">
        <div className="SBErrorDiv" style={{ display: errorDisplay }}>
          <p className="SBError">{error}</p>
        </div>
        <div className="SBNameDiv">
          <label className="SBNameLabel">Enter your name</label>
          <input className="SBNameInput SBInput" type="text" />
        </div>
        <div className="SBEmailDiv">
          <label className="SBEmailLabel">Enter your email</label>
          <input className="SBEmailInput SBInput" type="email" />
        </div>
        <div className="SBPasswordDiv">
          <label className="SBPasswordLabel">Password</label>
          <input className="SBPasswordInput SBInput" type="password" />
        </div>
        <div className="SBConfirmPasswordDiv">
          <label className="SBConfirmPasswordLabel">Confirm Password</label>
          <input className="SBConfirmPasswordInput SBInput" type="password" />
        </div>
        <div className="SBSignupButtonDiv">
          <button className="SBSignupButton" onClick={signupButtonHandle}>
            Signup
          </button>
        </div>
        <div className="SBsignuptext">
          <span>
            Already have an account ? <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupBox;
