import React, { useEffect } from "react";
import LandingNavbar from "../components/landingNavbar";
import SignupBox from "../components/signupBox";
import Footer from "../components/footer";
import SignupPageImg from "../media/LoginPageImg.svg";
import { useNavigate } from "react-router-dom";
import "../stylesheets/SignupPage.css";

const SignupPage = () => {
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
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.log("error");
        isAuthenticated = false;
      });

    return isAuthenticated;
  };

  useEffect(() => {
    authenticate();
  }, []);

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
