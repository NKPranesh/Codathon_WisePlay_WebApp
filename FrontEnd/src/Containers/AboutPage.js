import React from "react";
import About from "../components/about";
import Footer from "../components/footer";
import "../stylesheets/AboutPage.css";
import AboutNavbar from "../components/aboutNavbar";

const AboutPage = () => {
  return (
    <div className="ABMainDiv">
      <AboutNavbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;