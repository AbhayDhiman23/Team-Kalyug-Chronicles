
import React, { useState } from "react";
import bg from '../assets/bgflip.jpg';
import play from '../assets/play_2.svg';
import star2 from '../assets/star2.svg';

const Overview = () => {
  return (
    <section className="overview-section" id="overview">
      <div className="overview-content">
        <div className="overview-inner">
          <div className="image-container">
            <div className="image-inner">
              <img src={bg} alt="bg" loading="lazy" className="background-image" />
              <div className="play-button">
                <img src={play} alt="play" className="play-icon" />
              </div>
            </div>
          </div>
          <div className="marquee-container">
            <marquee className="marquee">
              <h1 className="marquee-text">DESIGN YOUR IDEAS <img className='star-icon' src={star2} alt="star2"/></h1>
            </marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
