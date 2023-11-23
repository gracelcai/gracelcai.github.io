import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { AppWrap } from '../../wrapper';

const About = () => {
  

  return (
    <div className='app__about'>
      <h2 className='head-text'>About</h2>
      <p> With over four years of experience in programming through 
      courses and hackathon projects, I bring a strong foundation in object-oriented programming, 
      data structures, 
      and algorithms. After being fascinated by how my dad’s Tesla detected other vehicles, 
      pedestrians, and objects around us, I completed the course Neural Networks and Deep 
      Learning from deeplearning.ai where I applied my calculus and linear algebra knowledge 
      to writing algorithms to recognize various objects. I am currently learning TensorFlow.js 
      and React Native to create an app with image classification that will incentivize users to 
      take pictures of trash they pick up in their communities for rewards. I am also a member 
      of Robotics at Maryland where I am learning how to program a Raspberry Pi to control a 
      catamaran through their onboarding program.
</p>


      
    </div>
  );
};

export default AppWrap(About, 'about');