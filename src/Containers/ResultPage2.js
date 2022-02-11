import React, { useState } from "react";
import Success from "../media/Success.svg";
import LandingNavbar from "../components/landingNavbar";
import Certificate from "../media/certificate.jpeg";
import Share from "../media/Share.svg";
import Footer from "../components/footer";
import SharePopup from "../components/sharePopup";
import "../stylesheets/ResultPage2.css";

const ResultPage = () => {
  let [popupDisplay, setPopupDisplay] = useState(false);

  return (
    <div className="RPMainDiv">
      <LandingNavbar />
      <div className="rsMaindiv">
        <div className="rscongodiv">
          <div className="rssucessimg">
            <img src={Success} />
          </div>
          <div className="rscongoh">
            <span>Congratulations!!</span>
          </div>
          <div className="rscongotext">
            <span> You have successfully completed the assessment test. </span>
          </div>
        </div>
        <div className="rsscorediv">
          <div className="rsscoreh">
            <span>Your Score</span>
          </div>
          <div className="rsscorerow">
            <div className="rsscoregraph">
              <span>Score graph Here</span>
            </div>
            <hr class="rounded" />
            <div className="rscertificatepreview">
              <img src={Certificate} />
            </div>
          </div>
        </div>
        <div className="rssharerow">
          <div
            className="rssharebutton"
            onClick={() => {
              setPopupDisplay(true);
              console.log(popupDisplay);
            }}
          >
            <img src={Share} />
            <span>Share</span>
          </div>
        </div>
      </div>
      <Footer />
      {popupDisplay && <SharePopup close={setPopupDisplay} />}
    </div>
  );
};

export default ResultPage;
