import React, { useState } from 'react'
import Hero from '../../components/Hero/Hero';
import Projects from '../Projects/Projects';
import about from '../../../src/assests/about.jpg'

import './Home.css';
import ProjectsCard from '../../components/ProjectsCard/ProjectsCard';
import AboutStyle from '../../components/AboutStyle/AboutStyle';
import ProjectHomeData from '../../components/ProjectHomeData/ProjectHomeData';

const Home = () => {

  const [ homeP, setHomeP] = useState(true);
  

  return (
    <div className='home'>
    
      <Hero
        cName='hero'
        img='https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        title='Hi ! I am a '
        typeClass='showTypewriter'
        btnClass='heroBtn'
      />

      <AboutStyle
        cleft='about-left-info'
        cRight='about-left-infop'
        title='What makes me different from others ?'
        text1="My name is Anurag Shukla 
        Currently I'm pursuing my Bachelor Degree in Electronics Communication Engineering from Veer Bahadur Singh Purvanchal University.
        During My Study period I have learnt so many demandable technologies and skills. For improve myself in these fields I have also worked on so many projects.
        Portfolio (this) project is one of them."
        text2='I  made more than 15 projects, 5 major projects ex: Travel website UI etc.., so i have a lot of experience.'
        text3='
        I also gave so many presentation in my college so i have a very strong communication skills which makes me better than others.
        '
        text4="
        I'm very dedicated to my work so i never disappoint you.
        "
        text5="
        I belive in try and learn so i always try to makes somethings which is different than perivious things.
        "
      />



      <ProjectHomeData
        title='Recent Projects'
      />
    </div>
  )
}

export default Home