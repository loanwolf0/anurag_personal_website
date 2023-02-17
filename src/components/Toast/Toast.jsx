import React from 'react'
import './Toast.css'
import {FaCheckCircle, } from 'react-icons/fa'
import {RxCross1} from 'react-icons/rx'



const Toast = () => {
  return (
    <div className='toast'>
        <div className='message'>
            
               <FaCheckCircle/>
            <div className="info">
            <h3>Message Send </h3>
            <p>wait maximum 2 working days for response.</p>

            </div>
        
        </div>
    </div>
  )
}

export default Toast