import React from "react";
import LandingNavbar from "../components/landingNavbar";
import LoginBox from "../components/loginBox";
import Footer from "../components/footer";
import LoginPageImg from "../media/LoginPageImg.svg";
import "../stylesheets/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="LPMainDiv">
      <LandingNavbar />
      <div className="LPBodyDiv">
        <img src={LoginPageImg} alt="img" />
        <LoginBox />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
