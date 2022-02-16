import React, { useState } from "react";
import Certificate from "../media/certificate.jpeg";
import Facebook from "../media/facebook-share-button.svg";
import Linkedin from "../media/linkedin-share-button.svg";
import Twitter from "../media/twitter-share-button.svg";
import Cancelicon from "../media/cancelicon.svg";
import "../stylesheets/sharePopup.css";
import { storage } from "../firebase";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
let imageuploaded = false;
let shareurl = "";
const SharePopup = (props) => {
  let [imageurl, setImageurl] = useState("");
  // if(!imageuploaded)
  {
    imageuploaded = true;
    let data = props.image;
    const uploadTask = storage
      .ref(`images/${props.name + props.date}`)
      .putString(data.split(",")[1], "base64", { contentType: "image/jpg" });
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // console.log(progress);
        // setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(props.name + props.date)
          .getDownloadURL()
          .then((url) => {
            setImageurl(url);
            shareurl = url;
          });
      }
    );
  }
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
            url={shareurl}
            quote={"You can also participate"}
            width="626"
            height="436"
          >
            <img
              src={Facebook}
              alt="img"
              onClick={() => {
                shareurl = imageurl;
              }}
            />
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
