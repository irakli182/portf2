import React from 'react'
import './second.css'
import { Link } from 'react-router-dom'
import fuji from "../images/fuji.jpg";
import { motion as m } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import { FaArrowLeft } from "react-icons/fa";
import white from "../images/white.jpg"
import black from "../images/black.png"
import green from "../images/green.png"
import pc from "../images/book.png"
import book from "../images/cofe.png"
import core from "../images/idea.png"
import crack from "../images/crack.png"
import table from "../images/sky.png"
import sword from "../images/sword.png"
import column from "../images/column.png"
import { FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJoomla } from "react-icons/fa";
import axios from 'axios';
import { useState } from 'react';
import { Helmet } from "react-helmet"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarked } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import { FaMail } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5'




const Second = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k7rewnb', 'template_zj0ht7c', form.current, 'Nl7CrF66bxPg8jiH7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div>


      <div id='z' className='b' style={{ backgroundImage: `url(${fuji})` }}>
        <div className='c'>
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

              <div className='descdiv'>
                <p className='desc'>Irakli Berikashvili - Web Developer</p>
              </div>
              <div className='butdiv'>
                <button>
                  <Link className='link' to='/second'>Click</Link>
                </button>
              </div>
      </div>

      <div className='e'>



        <div className='aboutdiv1'>
              <div className='meetmediv'>
                <p className='m1'>MEET IRAKLI.</p>
                <p className='m2'>Front End Developer</p>
              </div>
              <div className='herodiv'>
                <div className='herodiv1'>
                  <p className='h1'>WHO AM I?</p>
                  <p className='h2'>  &nbsp; junior web developer from Georgia. I use reactJS to build web applications and hobby websites.</p>
                </div>
              </div>
              <div className='aboutdiv2'>
                <img className='green' src={green}></img>
                <Fade>
                <p className='b1'>01</p>
                </Fade>
                <Fade delay={200}>
                <p className='b11'>Personality</p>
                </Fade>
                <div className='persondiv'>

                  <Fade left delay={200}>
                  <div className='la'>
                    <img id='pic1' className='pic' src={pc}/>
                    <p className='la1'>RESPONSIBILITY</p>
                    <p className='la2'>Since i was a child, i've been always doing some kind of work: physical, like archaeology; mental, like math competitions. That affected on my personality too - I am a person with high sense of responsibility.</p>
                  </div>
                  </Fade>

                  <Fade delay={300}>
                  <div className='la'>
                    <img id='pic2' className='pic' src={book}/>
                    <p id='la1' className='la1'>DEDICATION</p>
                    <p id='la2' className='la2'>I discovered programming an year ago and since then I've been exploring new topics without missing a single day! I find coding to be really excting and adventurous. It is what makes me enjoy spending hours and hours studying.</p>
                  </div>
                  </Fade>

                  <Fade right delay={200}>
                  <div className='la'>
                    <img id='pic3' className='pic' src={core}/>
                    <p className='la1'>TIME</p>  
                    <p className='la2'>I am very young, (eighteen years old) and have all the time in the world. With the right path and job I know I'll be able reach high levels and become what I dream of - full stack developer.</p>
                  </div>
                  </Fade>

                </div>
              </div>


              <div className='aboutdiv3'>
                  <img className='table' src={table}/>
                  <div className='qqq'>
                  <p className='b1111'></p>
                  <p className='b111'>Learn More</p>
                  </div>
                  
              </div>

              <div id='cards'>
                  <a href='https://projectsweb.vercel.app/' target="_blank">
                    <button className='newbutton'>PROJECTS</button>
                  </a>
              </div>

              <div className='footer'>
                <div className='wrapper'>

                  <div className='formdiv'>
                    <form ref={form} onSubmit={sendEmail}>
                      <p className='g1'>Write Me</p>
                      <p className='g2'>Name</p>
                      <input className='g11' type="text" name="user_name" />
                      <p className='g3'>Email</p>
                      <input className='g12' type="email" name="user_email" />
                      <p className='g4'>Message</p>
                      <textarea className='g13' rows='5' name="message" />
                      <button className='g14' type="submit" value="Send">Send</button>
                    </form>
                  </div>
                  
                  <div className='socialsdiv'>
                    <div className='socdiv1'>
                      <p className='v11'>Contact Information</p>
                      <p className='v22'>Feel free to get in touch with me for more.</p>
                    </div>
                    <div className='socdiv2'>
                      <div className='mapdiv'>
                        <FaMapMarked className='map' size={50}/>
                        <p className='vv1'>Adress: </p>
                        <p className='vv2'>Georgia, Tbilisi, Bochorishvili's 12</p>
                      </div>
                      <div className='mapdiv'>
                        <FaPhoneAlt className='map' size={50}/>
                        <p className='vv1'>Phone: </p>
                        <p className='vv2'>(+995) 555 411 337</p>
                      </div>
                      <div className='mapdiv'>
                        <IoMail className='map' size={50}/>
                        <p className='vv1'>Gmail: </p>
                        <p className='vv2'>iraklibusiness1@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

        </div>


      </div>



      </div>
      
    </div>
  )
}

export default Second
