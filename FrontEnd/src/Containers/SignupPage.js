import React from "react";
import LandingNavbar from "../components/landingNavbar";
import SignupBox from "../components/signupBox";
import Footer from "../components/footer";
import SignupPageImg from "../media/LoginPageImg.svg";
import "../stylesheets/SignupPage.css";

const SignupPage = () => {
  return (
    <div className="SPMainDiv">
      <LandingNavbar />
      <div className="SPBodyDiv">
        <img src={SignupPageImg} alt="img" />
        <SignupBox />
      </div>
      <Footer />
    </div>
  );
};

export default SignupPage;
