import React from 'react';
import "../stylesheets/dashboardContent.css"
import SkaterGirl from "../media/Skater Girl.svg";
import Student from "../media/Studentimg.svg";

const DashboardContent = () => {
  return (
    <div  className='DBContentDiv'>
      <div className='DBTopNav'>
          Welcome Navgeer!!
      </div>
      <div className='DBContent'>
        <div className='DBTestArea'>
        <span className='DBTestText'>Take a test today.</span>
        <div className='DBTestFIled'>
          <div className='DBStoryMode'>
            <img src={SkaterGirl} alt="SkaterGirl" />
            <div className='DBstoryContent'>
                <p className='DBStoryheading'>Story Mode</p>
                <div className='DBStoryContentRight'>
                  <p className='DBStoryInfo'>Track sales and customers on any device, a very simple and intuitive interface where you will not have any difficulties, as well as advanced learnwok</p>
                  <div className='DBStartButton'>
                  <button >Start Test</button>
                  </div>
                  </div>
                </div>
          </div>
          <div className='DBNormalMode'>
            <img src={Student} alt="" />
              <div className='DBstoryContent'>
                <p className='DBStoryheading'>Normal Mode</p>
                <div className='DBStoryContentRight'>
                  <p className='DBStoryInfo'>Track sales and customers on any device, a very simple and intuitive interface where you will not have any difficulties, as well as advanced learnwok</p>
                  <div className='DBStartButton'>
                  <button >Start Test</button>
                  </div>
                  </div>
              </div>
          </div>
        </div>
        </div>
        <div className='DBResult'>
          
        </div>
      </div>
    </div>
  )
}

export default DashboardContent;
