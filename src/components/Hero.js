import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-container'>
          <div className='bubbles'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <img className='fade' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jr2ycGWlIiMYzat6s6LcrKPkthk41ACO8lylh6InmMYgyYHSc3BNMNpKEwuik998suw&usqp=CAU" />
          </div>
          <div className='header'>
            <h1>Murray Anderson</h1>
            <h4>Front End Web Developer</h4>
          </div>
      
    </div>
  )
}

export default Hero