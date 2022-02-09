import React from 'react';
import "../quizpage.css";
export default function primaryNavbar() {
  return (
    <div className='navbox'>
      <a href="#"><img src="logo.jpeg" /></a>
      <div className="questionnobox">
        <span className="questionno1">3/</span>
        <span className="questionno2" >5</span>
      </div>
      <div className="detailsbox">
        <div className="detail">
          <img src="coins.jpeg" align="left" />
          <span className="detailtext">1050</span>
        </div>
        <div className="detail">
          <img src="clock.jpeg" align="left" />
          <span className="detailtext">4:50</span>
        </div>

        <div class="button">
          <span className="text-white">Exit</span>
        </div>
      </div>
    </div>
  )
}
