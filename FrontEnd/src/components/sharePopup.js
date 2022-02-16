import React from "react";
import Certificate from "../media/certificate.jpeg";
import Facebook from "../media/facebook-share-button.svg";
import Linkedin from "../media/linkedin-share-button.svg";
import Twitter from "../media/twitter-share-button.svg";
import Cancelicon from "../media/cancelicon.svg";
import "../stylesheets/sharePopup.css";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const SharePopup = (props) => {
  console.log(props.image);
  const file = new Blob([props.image], { type: "image/jpeg" });
  let imageurl = URL.createObjectURL(file);
  console.log(imageurl);
  window.onload = function () {
    var c1 = document.getElementById("SPCertificate");
    var ctx1 = c1.getContext("2d");
    var img = document.getElementById("SPCertificateimg");
    // console.log(img);
    ctx1.drawImage(img, 0, 0, img.width, img.height, 0, 0, c1.width, c1.height);
    ctx1.font = "20px Poppins";
    ctx1.fillText("Mani Sai", 210, 130);
    ctx1.font = "15px Poppins";
    ctx1.fillText("80%", 70, 235);
    ctx1.fillText("67%", 169, 235);
    ctx1.fillText("90%", 230, 235);
    ctx1.fillText("78%", 303, 235);
    ctx1.fillText("93%", 384, 235);
    ctx1.font = "10px Poppins";
    ctx1.fillText("09-02-2022", 120, 275);
  };
  console.log(props);
  return (
    <div className="SPOuterDiv">
      <div className="SPMain">
        <div className="SPCloseDiv">
          <img
            src={Cancelicon}
            alt="img"
            onClick={() => {
              props.close();
              var square = document.getElementById("RPMainDiv");
              square.style.filter = "";
              square.style.height = "";
              square.style.overflow = "";
            }}
          />
        </div>
        <div className="SPHeadDiv">
          <span>Share on Social Media</span>
        </div>
        <div className="SPCertificateDiv">
          <img
            src={props.image}
            alt="img"
            className="SPhideimg"
            id="SPCertificateimg"
          />
          {/* <canvas className="SPcertificate" id="SPCertificate"></canvas> */}
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
          <FacebookShareButton
            url={imageurl}
            quote={"You can also participate"}
            width="626"
            height="436"
          >
            <img src={Facebook} alt="img" />
          </FacebookShareButton>
          <TwitterShareButton
            url={imageurl}
            quote={"Quote"}
            width="626"
            height="436"
          >
            <img src={Twitter} alt="img" />
          </TwitterShareButton>

          <LinkedinShareButton
            url={imageurl}
            // width="626"
            // height="436"
          >
            <img src={Linkedin} alt="img" />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
