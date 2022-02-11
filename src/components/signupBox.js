import React from "react";
import "../stylesheets/signupBox.css";

const SignupBox = () => {
  return (
    <div className="SignupBoxDiv">
      <div className="SBHeadDiv">Signup</div>
      <div className="SBBodyDiv">
        <div className="SBErrorDiv" style={{ display: "none" }}>
          <p className="SBError">"error"</p>
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
          <button className="SBSignupButton">Signup</button>
        </div>
      </div>
    </div>
  );
};

export default SignupBox;
