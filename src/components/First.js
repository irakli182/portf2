import React from 'react'
import './first.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import line from '../images/lines.png'
import fuji from "../images/fuji.jpg";
import moon from "../images/moon.png"
import { motion as m } from 'framer-motion';
import { useState } from 'react';


export const First = () => {



  return (
    
    <div>


        <div className='b' style={{ backgroundImage: `url(${fuji})` }}>
          <Fade delay={200}>
            <div className='headdiv'>
              <p className='braces'>&#60;&nbsp;</p>
              <p className='fe'>f</p>
              <p className='fe'>r</p>
              <p className='fe'>o</p>
              <p className='fe'>n</p>
              <p className='fe'>t</p>
              <p className='fe'>&nbsp;</p>
              <p className='fe'>e</p>
              <p className='fe'>n</p>
              <p className='fe'>d</p>
              <p className='braces'>&nbsp;/&#62;</p>
            </div>
          </Fade>

          <Fade delay={700}>
            <div className='descdiv'>
              <p className='desc'>Irakli Berikashvili - Web Developer</p>
            </div>
            <div className='butdiv'>
              <button>
                <Link className='link' to='/second'>Click</Link>
              </button>
            </div>
          </Fade>


        </div>
    </div>
  )
}

export default First
