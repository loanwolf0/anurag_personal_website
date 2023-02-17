import React from 'react'
import './Education.css'

const Education = ({style,title, name, disc,img1,img2}) => {
  return (
      <div className='education'>
        <h3> {title} </h3>
        <div className={style}>
          <div className="educationDiscLeft">
              <h3>{name}</h3>
              <p>{disc} </p>
          </div>
          <div className="educationDiscRight">
              <div className="img-container">
                <div className="box">
                  <img src={img1} alt="img" />

                </div>
              </div>
              <div className="img-container">
                <div className="box">
                  <img src={img2} alt="img" className='imgBox'/>
                </div>
              </div>
              
          </div>
        </div>
      </div>
  )
}

export default Education