import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/loginBox.css";
import { Link } from "react-router-dom";
const LoginBox = (props) => {
  const [error, setError] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("none");
  const navigate = useNavigate();

  let loginButtonHandle = async () => {
    let email = document.getElementsByClassName("LBEmailInput")[0];
    let password = document.getElementsByClassName("LBPasswordInput")[0];

    await fetch(process.env.React_App_Backend_domain + "/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if ("error" in responseJson) {
          setErrorDisplay("block");
          setError(responseJson.error);
        }
        if ("user" in responseJson) {
          setErrorDisplay("none");
          setError("");
          props.setTestsData(responseJson.testsData);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="LoginBoxDiv">
      <div className="LBHeadDiv">Login</div>
      <div className="LBBodyDiv">
        <div className="LBErrorDiv" style={{ display: errorDisplay }}>
          <p className="LBError">{error}</p>
        </div>
        <div className="LBEmailDiv">
          <label className="LBEmailLabel">Enter your email</label>
          <input className="LBEmailInput LBInput" type="email" />
        </div>
        <div className="LBPasswordDiv">
          <label className="LBPasswordLabel">Password</label>
          <input className="LBPasswordInput LBInput" type="password" />
        </div>
        <div className="LBLoginButtonDiv">
          <button className="LBLoginButton" onClick={loginButtonHandle}>
            Login
          </button>
        </div>
        <div className="LBsignuptext">
          <span>Don't have an account ? <Link to="/signup">Signup</Link></span>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
