import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Success from "../media/Success.svg";
import ResultNavbar from "../components/resultpageNavbar";
import Certificate from "../media/certificate.jpeg";
import Share from "../media/Share.svg";
import Footer from "../components/footer";
import SharePopup from "../components/sharePopup";
import { Doughnut } from "react-chartjs-2";
import html2canvas from "html2canvas";
import "../stylesheets/ResultPage2.css";

let certificateimage = "";
const ResultPage = () => {
  let [popupDisplay, setPopupDisplay] = useState(false);
  let [testData, setTestData] = useState([]);
  let [name, setName] = useState("");
  let [sum, setSum] = useState(0);
  let [doughnutData, setDoughnutData] = useState({
    labels: ["Correct", "Wrong"],
    datasets: [
      {
        data: [10, 90],
        backgroundColor: ["#0058FF", "#F24B0F"],
        hoverOffset: 4,
      },
    ],
  });

  const navigate = useNavigate();

  const getData = async () => {
    await fetch(process.env.React_App_Backend_domain + "/resultData", {
      method: "get",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setName(responseJson.name);
        setTestData(responseJson.lastTestData);
        let s = 0;
        for (let i = 0; i < responseJson.lastTestData.length; i++) {
          s = s + responseJson.lastTestData[i];
        }
        s = (s / 5).toFixed(2);
        setSum(s);
        setDoughnutData({
          labels: ["Correct", "Wrong"],
          datasets: [
            {
              data: [s, 100 - s],
              backgroundColor: ["#0058FF", "#F24B0F"],
              hoverOffset: 4,
            },
          ],
        });
        console.log(responseJson);
      })
      .catch((error) => {
        console.log("error");
      });

    return 1;
  };

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
    getData();
    authenticate();
  }, []);
  setTimeout(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = mm + "-" + dd + "-" + yyyy;
    var c = document.getElementById("rscertificatepreview");
    var ctx = c.getContext("2d");
    var img = document.getElementById("rsCertificate");
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, c.width, c.height);
    ctx.font = "20px Poppins";
    ctx.fillText(name, 210, 130);
    ctx.font = "15px Poppins";
    ctx.fillText(testData[0] + "%", 70, 235);
    ctx.fillText(testData[1] + "%", 169, 235);
    ctx.fillText(testData[2] + "%", 230, 235);
    ctx.fillText(testData[3] + "%", 303, 235);
    ctx.fillText(testData[4] + "%", 384, 235);
    ctx.font = "10px Poppins";
    ctx.fillText(today, 120, 275);
    var data = document.getElementById("rscertificatepreview");
    html2canvas(data)
      .then((canvas) => {
        var image = canvas.toDataURL("image/jpeg", 1.0);
        // console.log(image);
        certificateimage = image;
        return image;
      })
      .then((image) => {
        // console.log(image);
        // saveAs(image, "Certificate.jpeg");
        // html.style.width = null;
        // body.style.width = null;
      });
  }, 1000);
  return (
    <React.Fragment>
      <div id="RPMainDiv">
        <ResultNavbar />
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
          <div className="rsscorerow">
            <div className="rsscoregraph">
              <div className="rsDoughnutdiv">
                <div className="rsDoughnutPercentage">
                  <span>{sum + "%"}</span>
                </div>
                <Doughnut
                  className="rsDoughnutScore"
                  data={doughnutData}
                  options={{
                    cutout: 110,
                    plugins: {
                      legend: {
                        display: false,
                        position: "right",
                      },
                    },
                  }}
                />
                <div className="rsscoresdiv">
                  <div className="rsscorestatdiv">
                    <span className="rsscorestath">Speed:</span>
                    <span className="rsscorestatpercentage">
                      {testData[0] + "%"}
                    </span>
                  </div>
                  <div className="rsscorestatdiv">
                    <span className="rsscorestath">Deep Thinking:</span>
                    <span className="rsscorestatpercentage">
                      {testData[1] + "%"}
                    </span>
                  </div>
                  <div className="rsscorestatdiv">
                    <span className="rsscorestath">Memory:</span>
                    <span className="rsscorestatpercentage">
                      {testData[2] + "%"}
                    </span>
                  </div>
                  <div className="rsscorestatdiv">
                    <span className="rsscorestath">Logical Reasoning:</span>
                    <span className="rsscorestatpercentage">
                      {testData[3] + "%"}
                    </span>
                  </div>
                  <div className="rsscorestatdiv">
                    <span className="rsscorestath">Focus:</span>
                    <span className="rsscorestatpercentage">
                      {testData[4] + "%"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rsscorerow">
              <hr className="rounded" />
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
      {popupDisplay && (
        <SharePopup close={setPopupDisplay} image={certificateimage} name={name} date={new Date()}/>
      )}
    </React.Fragment>
  );
};

export default ResultPage;
