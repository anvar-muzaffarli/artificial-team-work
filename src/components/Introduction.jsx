import React from 'react'
import sagTerefImg from '../assets/images/profil.svg'
import '../assets/css/Introduction.css'
import { MovingComponent } from 'react-moving-text'
import Typed from 'react-typed';
import Button from './Button'

import playIcon from '../assets/images/play.svg'
const Introduction = () => {
  return (
    <div className='row introduction mx-auto'>
      <div data-aos="fade-right" className="intro-left-side col-12 col-md-6 ps-5">

        <MovingComponent
          type="fadeInFromLeft"
          duration="1000ms"
          delay="0"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none">
          <h6>Next genaretion platform</h6>
        </MovingComponent>


        <Typed
          className="qacan-metn"
          strings={[
            'Artificial Intelligence',
            'Cybersecurity',
            'Solutions Architect']}
          typeSpeed={40}
          backSpeed={50}
          loop >
        </Typed>



        <MovingComponent
          type="swing"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none">
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </MovingComponent>



        <Button buttonunIcindekiYazi="Get started" buttonunKlassi="get-started" />
        <Button buttonunIcindekiYazi="Watch video" buttonunIcindekiShekil={playIcon} buttonunKlassi="watch-video"  />

        
      </div>

      <div data-aos="fade-left" className="intro-right-side col-12 col-md-6 d-flex justify-content-center">
        <img src={sagTerefImg} alt="" />
      </div>
    </div>
  )
}

export default Introduction