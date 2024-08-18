import React from 'react'
import './Tech.css';
import JSsvg from './JSsvg';
import HTMLsvg from './HTMLsvg';
import CSSsvg from './CSSsvg';
import REACTsvg from './REACTsvg';
import FEcert from './FEcert.png';


const Tech = () => {
  return (
    <div className='tech row'>
        <div className='col-lg-7'>
          <div>
            <div className='card-header'>
              Tech Stack
            </div>
          </div>

        </div>
        <div className='col-lg-5'>
          <div className='logos'>
            <HTMLsvg /> <CSSsvg /> <JSsvg /> <REACTsvg />
          </div>
          <div id='cert'>
            <img src={FEcert} alt='certificate' style={{ width: '600px', height: 'auto', marginTop: '80px', alignItems: 'center'}}></img>
          </div>
      </div>
    </div>
  )
}

export default Tech
