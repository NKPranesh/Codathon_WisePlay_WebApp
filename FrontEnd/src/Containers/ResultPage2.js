import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Success from "../media/Success.svg";
import LandingNavbar from "../components/landingNavbar";
import Certificate from "../media/certificate.jpeg";
import Share from "../media/Share.svg";
import Footer from "../components/footer";
import SharePopup from "../components/sharePopup";
import "../stylesheets/ResultPage2.css";

const ResultPage = () => {
  let [popupDisplay, setPopupDisplay] = useState(false);

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
        }
      })
      .catch((error) => {
        console.log("error");
        isAuthenticated = false;
        navigate("/login");
      });

    return isAuthenticated;
  };

  useEffect(() => {
    authenticate();
  }, []);

  window.onload = function () {
    var c = document.getElementById("rscertificatepreview");
    var ctx = c.getContext("2d");
    var img = document.getElementById("rsCertificate");
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, c.width, c.height);
    ctx.font = "20px Poppins";
    ctx.fillText("Mani Sai", 210, 130);
    ctx.font = "15px Poppins";
    ctx.fillText("80%", 70, 235);
    ctx.fillText("67%", 169, 235);
    ctx.fillText("90%", 230, 235);
    ctx.fillText("78%", 303, 235);
    ctx.fillText("93%", 384, 235);
    ctx.font = "10px Poppins";
    ctx.fillText("09-02-2022", 120, 275);
  };
  return (
    <>
      <div id="RPMainDiv">
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
              <span>
                {" "}
                You have successfully completed the assessment test.{" "}
              </span>
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
              {/* <div className="rscertificatepreview">
              <img src={Certificate} />
            </div> */}
              <img
                id="rsCertificate"
                src={Certificate}
                alt="The Certificate"
                className="rshideimage"
              />
              <canvas id="rscertificatepreview" width="481px" height="340px">
                Your browser does not support the HTML5 canvas tag.
              </canvas>
            </div>
          </div>
          <div className="rssharerow">
            <div
              className="rssharebutton"
              onClick={() => {
                setPopupDisplay(true);

                var square = document.getElementById("RPMainDiv");
                square.style.filter = "blur(6px)";
                square.style.height = "100vh";
                square.style.overflow = "hidden";
              }}
            >
              <img src={Share} />
              <span>Share</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {popupDisplay && <SharePopup close={setPopupDisplay} />}
    </>
  );
};

export default ResultPage;
