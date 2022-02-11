import react from "react";
import certificate from "../media/certificate.jpeg";
import facebook from "../media/facebook-share-button.svg";
import linkedin from "../media/linkedin-share-button.svg";
import twitter from "../media/twitter-share-button.svg";
import cancelicon from "../media/cancelicon.svg";
import Logo from "../media/logo.svg";
import sucess from "../media/Sucess.svg";
import "../stylesheets/resultpage.css";
import share from "../media/Share.svg";
import html2canvas from "html2canvas";

const opencertificate = () => {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("rsCertificate");
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    0,
    0,
    c.width,
    c.height
  );
  ctx.font = "50px Arial";
  ctx.fillText("Pranesh", 410, 260);
  ctx.font = "30px Arial";
  ctx.fillText("100%", 150, 480);
  ctx.fillText("100%", 335, 480);
  ctx.fillText("100%", 465, 480);
  ctx.fillText("100%", 615, 480);
  ctx.fillText("100%", 780, 480);
  ctx.font = "20px Arial";
  ctx.fillText("09-02-2022", 245, 570);
  let maindiv = document.getElementsByClassName("rsmain")[0];
  let popup = document.getElementsByClassName("rspopupdiv")[0].style;
  popup.display = "flex";
  var data = document.getElementById("myCanvas");
  html2canvas(data)
    .then((canvas) => {
      var image = canvas.toDataURL("image/jpeg", 1.0);
      return image;
    })
    .then((image) => {
      console.log(image);
       saveAs(image, "Certificate.jpeg");
      // html.style.width = null;
      // body.style.width = null;
    });
};
const saveAs = (blob, fileName) => {
  var elem = window.document.createElement("a");
  elem.href = blob;
  elem.download = fileName;
  elem.style = "display:none;";
  (document.body || document.documentElement).appendChild(elem);
  if (typeof elem.click === "function") {
    elem.click();
  } else {
    elem.target = "_blank";
    elem.dispatchEvent(
      new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      })
    );
  }
  URL.revokeObjectURL(elem.href);
  elem.remove();
};

const facebookshare= ()=>{
    var data = document.getElementById("myCanvas");
    var text="";
  html2canvas(data)
    .then((canvas) => {
      var image = canvas.toDataURL("image/jpeg", 1.0);
      return image;
    })
    .then((image) => {
        text=image;
      console.log(image);

    });
}

const ResultPage = () => {
  return (
    <div>
      <div className="rspopupmaindiv">
        <div className="rspopupdiv" id="rspopupdiv">
          <div
            className="rsclose"
            onClick={() => {
              let popup =
                document.getElementsByClassName("rspopupdiv")[0].style;
              popup.display = "none";
            }}
          >
            <img src={cancelicon} />
          </div>
          <img
            id="rsCertificate"
            src={certificate}
            alt="The Certificate"
            className="rshideimage"
          />
          <div className="rsshareh">
            <span>Share on Social Media</span>
          </div>
          <div className="rscanva">
            <canvas id="myCanvas" width="1000px" height="700px">
              Your browser does not support the HTML5 canvas tag.
            </canvas>
            <div className="rssharetext">
              <span>
                We will tell you about the program interface, how to add
                applications and employees, how to collect requests and process
                payments, monitor analytics. You can watch our other reviews on
                our YouTube
              </span>
            </div>
            <div className="rssharerowicon">
              <div onClick={() =>{facebookshare()}}><img src={facebook} /></div>
              <img src={twitter} />
              <img src={linkedin} />
            </div>
          </div>
        </div>
      </div>
      <div className="rsmain">
        <div className="rsNavBar">
          <div className="rsLogo">
            <img src={Logo} />
          </div>
          <div className="rsLogout">
            <a href="#">Logout</a>
          </div>
        </div>
        <div className="rsMaindiv">
          <div className="rscongodiv">
            <div className="rssucessimg">
              <img src={sucess} />
            </div>
            <div className="rscongoh">
              <span>Congratulations!!</span>
            </div>
            <div className="rscongotext">
              <span> You have successfullycompleted the assessment test. </span>
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
              <div className="rsdividerline"></div>
              <div className="rscertificatepreview">
                <img src={certificate} />
              </div>
            </div>
          </div>
        </div>
        <div className="rssharerow">
          <div className="rssharebutton" onClick={opencertificate}>
            <img src={share} />
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResultPage;
