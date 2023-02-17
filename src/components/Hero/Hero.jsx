import React from 'react'
import './Hero.css'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const Hero = ({cName,img, title,typeClass,btnClass,}) => {

  return (
    <>
    
    <div className={cName}>
        <img src={img} alt="img" className='heroImg' />
        <div className="heroTxt">
          <h3>{title}</h3>
          <h2 className={typeClass}>
            { 
              <Typewriter
                
                options={{
                  autoStart:true,
                  loop:true,
                  delay:300,
                  strings: [
                    'Web Developer.',
                    'React Js Developer.',
                    'Learner.'
                  ]
                }}
              />
            }
          </h2> 
        </div>   
    </div>
    <div className={btnClass}>
            <Link to='/projects'>
              <button className='btn'> Projects</button>
            </Link>
            <Link to='/contact'>
              <button className='btn btn-light'> Contact</button>
            </Link>
          </div>
    </>
  )
}

export default Hero