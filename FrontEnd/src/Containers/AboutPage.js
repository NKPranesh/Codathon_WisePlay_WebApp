import React from "react";
import LandingNavbar from "../components/landingNavbar";
import About from "../components/about";
import Footer from "../components/footer";
import "../stylesheets/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="ABMainDiv">
      <LandingNavbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;