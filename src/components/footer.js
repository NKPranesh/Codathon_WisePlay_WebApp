import React from "react";
import Logo from "../media/logoFooter.svg";
import FBIcon from "../media/facebookFooter.svg";
import InstagramIcon from "../media/instagramFooter.svg";
import DiscordIcon from "../media/discordFooter.svg";
import "../stylesheets/footer.css";

const footer = () => {
  return (
    <div className="footerMainDiv">
      <div className="footerDisplay1366Div">
        <div className="footerIntroDiv">
          <img src={Logo} className="footerIntroLogo" alt="img" />
          <span className="footerIntroBody">
            On the other hand, we denounce with righteous indignation and
            dislike men.
          </span>
        </div>
        <div className="footerLinksDiv">
          <div className="footerLinksSocialDiv">
            <img src={FBIcon} className="footerFBLogo" alt="img" />
            <img
              src={InstagramIcon}
              className="footerInstagramLogo"
              alt="img"
            />
            <img src={DiscordIcon} className="footerDiscordLogo" alt="img" />
          </div>
          <div className="footerLinksCompanyDiv">
            <span className="footerLinkPrivacyPolicy footerLinkCompany">
              Privacy Policy
            </span>
            <span className="footerLinkSecurity footerLinkCompany">
              Security
            </span>
            <span className="footerLinkTermsOfService footerLinkCompany">
              Terms of Service
            </span>
          </div>
        </div>
        <div className="footerContactDiv">
          <span className="footerContactTitle">Contact</span>
          <div className="footerContactContent">
            <span className="footerContactPhone">Phone: +91 9063086829</span>
            <span className="footerContactEmail">
              Email: speakwell@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
