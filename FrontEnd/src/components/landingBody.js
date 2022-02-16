import React from "react";
import { Link } from "react-router-dom";
import Student from "../media/student.svg";
import Dashboard from "../media/Dashboard.svg";
import skatergirl from "../media/Skater Girl.svg";
import Studentimg from "../media/Studentimg.svg";
import Facebook from "../media/Facebook.svg";
import Twitter from "../media/twitter.svg";
import Linkedin from "../media/linkedin.svg";
import AdvantageImg1 from "../media/advantageImg1.png";
import AdvantageImg2 from "../media/advantageImg2.png";
import AdvantageImg3 from "../media/advantageImg3.png";
import "../stylesheets/landingBody.css";
const LandingBody = () => {
  return (
    <div className="LBMainDiv">
      <div className="LBIntroDiv">
        <div className="LBIntroText">
          <span>Assess your self from any corner of the world</span>
        </div>
        <div className="LBIntroButton">
          <Link to="/signup">Start Using</Link>
        </div>
        <div className="LBIntroImage">
          <img src={Student} alt="img" />
        </div>
      </div>
      <div className="LBBannerDiv">
        <div className="LBBannerTopDiv">
          <span className="LBBannerTopH1">Excited to share your result</span>
          <span className="LBBannerTopH2">You can use these platforms</span>
        </div>
        <div className="LBBannerBottomDiv">
          <div className="LBIconDiv">
            <img src={Facebook} alt="img" className="LBFacebookImg" />
          </div>
          <div className="LBIconDiv">
            <img src={Twitter} alt="img" className="LBTwitterImg" />
          </div>
          <div className="LBIconDiv">
            <img src={Linkedin} alt="img" className="LBLinkedinImg" />
          </div>
        </div>
      </div>
      <div className="LBDashboardDiv" id="LBDashboardID">
        <div className="LBDashboardTextDiv">
          <span className="LBDashboardTextH1">
            Intuitive dashboard for monitoring
          </span>
          <span className="LBDashboardTextB">
            Track your test results with our dashboard which provides detailed
            analysis in each trait and Average scores of all the tests till date
            along with average categorical score.
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
            <div className="LBImgDiv">
              <img src={AdvantageImg1} alt="img" />
            </div>
            <div className="LBAdvantageHeading">
              <span>Fast response</span>
            </div>
            <div className="LBAdvantagedesc">
              <span>
                Works quickly in the browser of your computer and gives instant
                results
              </span>
            </div>
          </div>
          <div className="LBAdvantageBox">
            <div className="LBImgDiv">
              <img src={AdvantageImg2} alt="img" />
            </div>
            <div className="LBAdvantageHeading">
              <span>Detailed Analysis</span>
            </div>
            <div className="LBAdvantagedesc">
              <span>
                Can view performance in traits like speed, memory, focus, deep
                thinking and logical reasoning
              </span>
            </div>
          </div>
          <div className="LBAdvantageBox">
            <div className="LBImgDiv">
              <img src={AdvantageImg3} alt="img" />
            </div>
            <div className="LBAdvantageHeading">
              <span>Share Certificate</span>
            </div>
            <div className="LBAdvantagedesc">
              <span>
                Can Share his Certificate in Social media sites like Facebook,
                linkedin, Twitter
              </span>
            </div>
          </div>
        </div>
        <div className="LBIntroButton">
          <Link to="/signup">Start Using</Link>
        </div>
      </div>
      <div className="LBcategorydiv">
        <div className="LBcategoryheading">
          <span>Our Mode of Assesments</span>
        </div>
        <div className="LBCategoryrow">
          <div className="LBCategorybox">
            <div className="LBcategoryimage LBStudentDiv">
              <img src={Studentimg} />
            </div>
            <div className="LBcategoryhead">
              <span>Normal Mode</span>
            </div>
            <div className="LBcategorydesc">
              <span>
                Appropriate colors were used which would keep student more
                focused and To keep the students motivated memes will be
                displayed so that the students won't feel bored.
              </span>
            </div>
          </div>
          <div className="LBCategorybox">
            <div className="LBcategoryimage LBSkateGirlDiv">
              <img src={skatergirl} className="LBSkateGirlImg" />
            </div>
            <div className="LBcategoryhead">
              <span>Story Mode</span>
            </div>
            <div className="LBcategorydesc">
              <span>
                The assessment will be in the form of a story and as the story
                proceeds some situations arise and logical questions will be
                asked based on those situations.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="LBfaq" id="LBFaqID">
        <div className="LBfaqbox">
          <div className="LBfaqheading">
            <span>FAQ</span>
          </div>
        </div>
        <div className="LBfaqquestionbox">
          <div className="LBfaqquestion">
            <span>
              Is it possible for me to take the assessment multiple times?
            </span>
          </div>
          <div className="LBline"></div>
          <div className="LBfaqanswer">
            <span>
              Yes, you can take the test as many times as you want. At Wiseplay,
              we believe that constant preparation yields the desired result and
              thus improves performance. You can also find your performance
              graph which contains your scores in various assessments.
            </span>
          </div>
        </div>
        <div className="LBfaqquestionbox">
          <div className="LBfaqquestion">
            <span>How is the final score determined?</span>
          </div>
          <div className="LBline"></div>
          <div className="LBfaqanswer">
            <span>
              The number of questions you correctly answer determines your
              score. You'll be given a score based on how many questions you've
              answered correctly. We also factored in time, so the faster you
              solve, the more points you'll get.
            </span>
          </div>
        </div>
        <div className="LBfaqquestionbox">
          <div className="LBfaqquestion">
            <span>
              In these evaluations, what types of skills are typically tested?
            </span>
          </div>
          <div className="LBline"></div>
          <div className="LBfaqanswer">
            <span>
              To evaluate a candidate, we consider a variety of factors. Logical
              reasoning, deep thinking, memory, focus, and speed are some of the
              aspects. Your final score is determined by the sum of your
              individual scores in these areas.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBody;
