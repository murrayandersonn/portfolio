import React from 'react';
import './Hero.css';
import backdrop from '../Assets/images/backdrop.mp4';

const Hero = () => {
  return (
<div className='hero-container'>
      <video autoPlay loop muted playsInline className='background-video'>
        <source src={backdrop} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='content'>
        <img className='fade' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jr2ycGWlIiMYzat6s6LcrKPkthk41ACO8lylh6InmMYgyYHSc3BNMNpKEwuik998suw&usqp=CAU" alt="Background" />
        <div className='header'>
          <h1>Murray Anderson</h1>
          <h4>Front End Web Developer</h4>
        </div>
      </div>
    </div>
  );
}

export default Hero