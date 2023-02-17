import React from 'react'
import './AboutStyle.css'
const AboutStyle = ({title,text1,text2,text3,text4,text5,cleft,cRight}) => {
  return (

    <section className="about-container">
        <div className='aboutStyle'>
            <div className={cleft}>
                <h1>{title} </h1>
                <div className={cRight}>
                    <p>
                        {text1}
                    </p>
                    <p>
                        {text2}
                    </p>
                    <p>
                        {text3}
                    </p>
                    <p>
                        {text4}
                    </p>
                    <p>
                        {text5}
                    </p>
                </div>

            </div>
            
        </div>
    </section>
  )
}

export default AboutStyle