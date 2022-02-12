import React from "react";
import "../stylesheets/loginBox.css";

const LoginBox = () => {
  return (
    <div className="LoginBoxDiv">
      <div className="LBHeadDiv">Login</div>
      <div className="LBBodyDiv">
        <div className="LBErrorDiv" style={{ display: "none" }}>
          <p className="LBError">"error"</p>
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
          <button className="LBLoginButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
