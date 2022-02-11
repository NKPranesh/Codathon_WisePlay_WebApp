import React from "react";
import Certificate from "../media/certificate.jpeg";
import Facebook from "../media/facebook-share-button.svg";
import Linkedin from "../media/linkedin-share-button.svg";
import Twitter from "../media/twitter-share-button.svg";
import Cancelicon from "../media/cancelicon.svg";
import "../stylesheets/sharePopup.css";

const SharePopup = (props) => {
  return (
    <div className="SPOuterDiv">
      <div className="SPMainDiv">
        <div className="SPCloseDiv">
          <img
            src={Cancelicon}
            alt="img"
            onClick={() => {
              props.close();
            }}
          />
        </div>
        <div className="SPHeadDiv">
          <span>Share on Social Media</span>
        </div>
        <div className="SPCertificateDiv">
          <img src={Certificate} alt="img" />
        </div>
        <div className="SPTextDiv">
          <span>
            We will tell you about the program interface, how to add
            applications and employees, how to collect requests and process
            payments, monitor analytics. You can watch our other reviews on our
            YouTube
          </span>
        </div>
        <div className="SPLinksDiv">
          <img src={Facebook} alt="img" />
          <img src={Twitter} alt="img" />
          <img src={Linkedin} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
