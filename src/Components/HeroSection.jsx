import React from 'react';
import './Herosection.css'; // Create a CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="content-wrapper">
        <h2>I'm Surya</h2>
        <h1><span>Word</span><span className='span2'>Press </span>&amp;</h1> <br></br><h1><span>Front</span>End Developer</h1>
        <p>
          With expertise in multiple programming languages and a passion for elegant design, I specialize in
          building sleek, user-centric solutions that address complex digital challenges. My approach combines
          technical precision with creative innovation to deliver outstanding results.
        </p>
        <button className="cta-button">  <a href="">        <img src="src\assets\upwork.svg" alt="LinkedIn" />
        </a>Contact me on upwork </button>
     
     
      <div className="footer-icons">
        <a href=""><img src="src\assets\linkedin.svg" alt="Upwork" /> </a>
        <a href="">        <img src="src\assets\upwork.svg" alt="LinkedIn" />
        </a>
       <a href=""> <img src="src\assets\github.svg" alt="GitHub" /></a>
      </div>

      </div>

      <div className='photo_surya' >

        <div className="circle"> 

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
