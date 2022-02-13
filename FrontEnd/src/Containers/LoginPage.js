import React, { useEffect } from "react";
import LandingNavbar from "../components/landingNavbar";
import LoginBox from "../components/loginBox";
import Footer from "../components/footer";
import LoginPageImg from "../media/LoginPageImg.svg";
import { useNavigate } from "react-router-dom";
import "../stylesheets/LoginPage.css";

const LoginPage = () => {
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
