import React from 'react'
import './Project.css'

const Project = ({imgL,pName,disc,view,source}) => {
  return (
    <div className='project'>
        <div className="p-img">
            <img src={imgL} alt="img" />
        </div> 

        <div className="p-text">
          <h3>{pName}</h3>
          <p className='dis'> {disc}</p>
        </div>
        
        <div className="projectBtn">
            <a href={view}><button className='btn'> View</button></a>
            <a href={source}><button className='btn btn-light'> Source </button></a>
        </div>
    </div>
  )
}

export default Project