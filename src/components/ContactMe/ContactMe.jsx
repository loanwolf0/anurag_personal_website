import React, { useRef, useState } from 'react'
import './ContactMe.css';
import emailjs from '@emailjs/browser';
import {FaMailBulk, FaLinkedin,FaInstagram} from 'react-icons/fa'
import Toast from '../Toast/Toast';

const ContactMe = () => {

    const [showToast, setShowToast] = useState(false);
    const formC = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ltyko2a', 'template_qqaw5df', formC.current, '0t821Be-uWAzughky')
          .then((result) => {
              
              console.log(result.text);
              setShowToast(true);
          }, (error) => {
              console.log(error.text);
              setShowToast(true);

          });
          e.target.reset();

          
      };

      setTimeout(()=>{
        setShowToast(false)

     },5000);

  return (
    <div className='contactMe'>
        <div className="containerC">
            <div className="contactMeLeft">
                <h2> Message Via</h2>
                <a className="messageIcons"
                    href='https://www.linkedin.com/in/anurag-shukla-283224234/'>
                    <FaLinkedin/>
                    Linked In
                </a>
                <a className="messageIcons"
                    href="mailto:anurag12775@gmail.com">
                    <FaMailBulk/>
                    Email 
                </a>
                <a className="messageIcons"
                    href='https://instagram.com/anurag_._shukla?igshid=ZDdkNTZiNTM='>
                    <FaInstagram/>
                    Instagram
                </a>
            </div>

            <div className="contactMeRight">
                <h2>Direct Message </h2>
                <form  ref={formC} onSubmit={sendEmail} >
                    <input 
                        type="text" 
                        name="user_name" 
                        id="name" 
                        required 
                        className='inputC' 
                        placeholder='Your Name'/>
                    <input 
                        type='email' 
                        name="user_email" 
                        id="email" 
                        required 
                        className='inputC' 
                        placeholder='Enter Your Email'/>
                    <input 
                        type="text" 
                        name="subject" 
                        id="subject" 
                        required 
                        className='inputC'
                        placeholder='Subject'/>
                    <textArea 
                        className='inputC textAreaC' 
                        placeholder='Your Message...'
                        name='message'
                        ></textArea>
                    <button type="submit" 
                        className='btn '
                        >Send message</button>
                </form>
            </div>

        </div>
        
        {
            showToast && 
            <div className="toastContainerC">
              <Toast />
            </div>
        
        }
            

    </div>
  )
}

export default ContactMe