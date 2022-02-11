import React from "react";
import LandingNavbar from "../components/landingNavbar";
import LandingBody from "../components/landingBody";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div>
      <LandingNavbar />
      <LandingBody />
      <Footer />
    </div>
  );
};

export default LandingPage;
