import React from "react";
import { Link } from "react-router-dom";
import Student from "../media/student.svg";
import Dashboard from "../media/Dashboard.svg";
import "../stylesheets/landingBody.css";
import skatergirl from "../media/Skater Girl.svg";
import Studentimg from "../media/Studentimg.svg"
const LandingBody = () => {
  return (
    <div className="LBMainDiv">
      <div class="LBIntroDiv">
        <div class="LBIntroText">
          <span>Assess your self from any corner of the world</span>
        </div>
        <div class="LBIntroButton">
          <Link to="/">Start Using</Link>
        </div>
        <div className="LBIntroImage">
          <img src={Student} alt="img" />
        </div>
      </div>
      <div class="LBBannerDiv">
        <div className="LBBannerTopDiv">
          <span className="LBBannerTopH1">Are already using</span>
          <span className="LBBannerTopH2">
            We have been working with some 500 clients
          </span>
        </div>
        <div className="LBBannerBottomDiv">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
        </div>
      </div>
      <div className="LBDashboardDiv">
        <div className="LBDashboardTextDiv">
          <span className="LBDashboardTextH1">
            Intuitive dashboard for monitoring
          </span>
          <span className="LBDashboardTextB">
            Track sales and customers on any device, a very simple and intuitive
            interface where you will not have any difficulties, as well as
            advanced teamwork
          </span>
        </div>
        <div className="LBDashboardImgDiv">
          <img src={Dashboard} alt="img" />
        </div>
      </div>
      <div className="LBadvantagediv">
        <div className="LBAdvantageMainHeading">
          <span>The advantages of our product</span>
        </div>
        <div className="LBAdvantages">
          <div className="LBAdvantageBox">
            <div className="LBAdvantageHeading">
              <span>Fast response</span>
            </div>
            <div className="LBAdvantagedesc">
              <span>
                Works quickly both in the browser and on the desktop application
                of your computer
              </span>
            </div>
          </div>
          <div className="LBAdvantageBox">
            <div className="LBAdvantageHeading">
              <span>Fast response</span>
            </div>
            <div className="LBAdvantagedesc">
              <span>
                Works quickly both in the browser and on the desktop application
                of your computer
              </span>
            </div>
          </div>
          <div className="LBAdvantageBox">
            <div className="LBAdvantageHeading">
              <span>Fast response</span>
            </div>
            <div className="LBAdvantagedesc">
              <span>
                Works quickly both in the browser and on the desktop application
                of your computer
              </span>
            </div>
          </div>
        </div>
        <div class="LBIntroButton">
          <Link to="/">Start Using</Link>
        </div>
      </div>
      <div className="LBcategorydiv">
        <div className="LBcategoryheading">
          <span>Our Categories of assesments</span>
        </div>
        <div className="LBCategoryrow">
          <div className="LBCategorybox">
            <div className="LBcategoryimage">
              <img src={skatergirl}/>
            </div>
            <div className="LBcategoryhead">
              <span>Primary Student</span>
            </div>
            <div className="LBcategorydesc">
              <span>description of primary student assessment pattern</span>
            </div>
          </div>
          <div className="LBCategorybox">
            <div className="LBcategoryimage">
              <img src={Studentimg}/>
            </div>
            <div className="LBcategoryhead">
              <span>Secondary Student</span>
            </div>
            <div className="LBcategorydesc">
              <span>description of  Secondary student assessment pattern</span>
            </div>
          </div>
        </div>
      </div>
      <div className="LBfaq">
        <div className="LBfaqbox">
          <div className="LBfaqheading">
            <span>FAQ</span>
          </div>
        </div>
        <div class="LBfaqquestionbox">
          <div class="LBfaqquestion">
            <span>Is there any support for your application?</span>
          </div>
          <div class="LBline"></div>
          <div class="LBfaqanswer">
            <span>answer</span>
          </div>
        </div>
        <div class="LBfaqquestionbox">
          <div class="LBfaqquestion">
            <span>Is there any support for your application?</span>
          </div>
          <div class="LBline"></div>
          <div class="LBfaqanswer">
            <span>answer</span>
          </div>
        </div>
        <div class="LBfaqquestionbox">
          <div class="LBfaqquestion">
            <span>Is there any support for your application?</span>
          </div>
          <div class="LBline"></div>
          <div class="LBfaqanswer">
            <span>answer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBody;
