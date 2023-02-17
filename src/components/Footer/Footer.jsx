import React from 'react'
import './Footer.css'
import {FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin, FaYoutube, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer' >
        <div className="left">
            <h3>Keep In Touch</h3>
            <div className="leftI">
                <FaHome/>
                <p>222001, jaunpur, up, India.</p>
            </div>
            <div className="leftI">
                <FaPhone/>
                <p> Call Me On <a href="tel:+917080445746"> +91-7080445746</a> </p>
            </div>
            <div className="leftI">
                <FaMailBulk/>
                <p>Mail Me On <a href="mailto:anurag12775@gmail.com"> anurag12775@gmail.com</a></p>
            </div>
        </div>

        <div className="right">
            <h3>About Me</h3>
            <div className="aboutText">
                <p>Hello Everyone, I'm Anurag Shukla. </p>
                <p>I have an experience of 1+ year on </p>
                <p>Html, css, javaScript, React-js and created so many projects. </p>
            </div>
            
            <div className="iconsf">
                <a href="https://github.com/loanwolf0?tab=repositories">
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/anurag-shukla-283224234/">
                    <FaLinkedin/>
                </a>
                <a href="https://www.youtube.com/channel/UCpK5ZsilQ0TNbueh5RpbGtw">
                    <FaYoutube/>
                </a>
                <a href="https://instagram.com/anurag_._shukla?igshid=ZDdkNTZiNTM=">
                    <FaInstagram/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer;