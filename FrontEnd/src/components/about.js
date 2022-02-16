import React from 'react';
import "../stylesheets/about.css";
import AboutImage from "../media/about.svg";

const About = () => {
  return (
      <React.Fragment>
        <div className='ABHeading'>
            About Us
        </div>

        <div className='ABInnerDiv'>
            <div className='ABLeftDiv'>
                <img src={AboutImage} alt="aboutImage" />
            </div>
            <div className='ABRightDiv'>
                <div className='ABInnerHeading'>
                    <span className='ABHeadName'>Problem Statement</span>
                    <p>Create an assessment platform where students can assess themselves. The result should be sharable in different social media platforms. The UI of the website should be interactive and user-friendly manner.</p>
                </div>
                <div className='ABInnerHeading'>
                <span className='ABHeadName'>Our Solution</span>
                <p>Our website consists of two modes of assessment, one is story mode and the other is normal mode. 
                    We calculate marks for individual questions based on time rather than calculating time taken for all the questions.
                    By considering time as constraint, we can make students to be attentive while taking the assessment.
                    At the end of the assessment, they can share their result to social media platforms. 
                    </p>
                </div>
                <div className='ABInnerHeading'>
                <span className='ABHeadName'>Our Team</span>
                <div className='ABTeamDetails'>
                    <div className='ABTeamMember'>
                        <p><span className='ABTeamName'>Pranesh</span> <a href="mailto:nkpranesh@gmail.com">nkpranesh@gmail.com</a></p>
                    </div>
                    <div className='ABTeamMember'>
                    <p><span className='ABTeamName'>ManiSai</span> <a href="mailto:kamutalamanisai26@gmail.com">kamutalamanisai26@gmail.com</a></p>
                    </div>
                    <div className='ABTeamMember'>
                    <p><span className='ABTeamName'>Meghana</span> <a href="mailto:meghanamannem163@gmail.com">meghanamannem163@gmail.com</a></p>
                    </div>
                    <div className='ABTeamMember'>
                    <p><span className='ABTeamName'>SriVidya</span> <a href="mailto:mallupallisrividyareddy@gmail.com">mallupallisrividyareddy@gmail.com</a></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default About;
