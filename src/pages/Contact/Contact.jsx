import React from 'react'
import ContactMe from '../../components/ContactMe/ContactMe'
import Hero from '../../components/Hero/Hero'
import './Contact.css'


const Contact = () => {
  return (
    <div>
      <Hero
      cName='heroMid'
      img='https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      title='Connect With Me '
      typeClass='hide'
      btnClass='heroBtnHide'
    />

    <ContactMe/>
    </div>
  )
}

export default Contact