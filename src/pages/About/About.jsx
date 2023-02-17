import React from 'react'
import Hero from '../../components/Hero/Hero'
import about from '../../../src/assests/new.jpg'
import './About.css'
import Education from '../../components/Education/Education'
import AboutStyle from '../../components/AboutStyle/AboutStyle'


const About = () => {
  return (
    <div className='about'>
      <Hero
      cName='heroMid'
      img={about}
      title='All About Me'
      typeClass='hide'
      btnClass='heroBtnHide'
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

      <AboutStyle
        cleft='about-right-info'
        cRight='about-right-infop'
        title='Skills I have.'
        text1='Html & Css '
        text2='JavaScript'
        text3='React JS  &  React-Redux'
        text4=' Communication '
        text5='Front End Developer'
      />

    <Education
      style='educationDisc'
      title='School'
      name='Nehru Balodyan Inter College, Jaunpur'
      disc='When I was in class 5th, My father decided to get my admission in Nehru Balodyan Inter College Jaunpur. I studied in Nehru Balodyan from class 5 to class 12th.
            During this period I met my school friends. They were next level boys . They teached me those things that no Teacher teaches you in class or any Coaching. my friends name is :- 
            Utkarsh yadav, manoj yadav, vivek singh,saurabh singh,sumit yadav,kishan yadav, Shubham mishra, Himanshu gupta,vikash yadav, vikash sharma, Alok yadav.'
      img1="https://www.yayskool.com/images/school/5681580475f13cf93c945935b1b58019056a2de.jpeg"
      img2="https://th.bing.com/th/id/OIP.60SUQUoCbIs3sPCUeZSL6AHaDw?pid=ImgDet&rs=1"
    />

    <Education
      style='educationDisc-reverse'
      title='College'
      name='Veer Bahadur Singh Purvanchal University Jaunpur'
      disc='I take my admission in B-tech (ECE) in 2019. In First month of my admission the TEQU Program is ongoing, During the program we enjoyed many programs that were running on those days I visited Ayodhya, Satahariya with my new college friends 
            currently (12/02/2023) I am in 4th year 7th sem. '
      img1="https://images1.livehindustan.com/uploadimage/library/2021/05/02/16_9/16_9_1/summer_vacation_till_31_may_in_vbspu_1619951522.jpg"
      img2="https://i.ytimg.com/vi/c2XqRi_9u2c/maxresdefault.jpg"
    />

    </div>
  )
}

export default About