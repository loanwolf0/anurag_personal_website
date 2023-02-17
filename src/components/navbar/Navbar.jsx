import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {FiMenu} from 'react-icons/fi'
import {RxCross1} from 'react-icons/rx'
import navData from '../../data/NavData'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleMenu = () =>{
    setShowMenu(!showMenu);
    console.log(showMenu)
  }

  return (
    <div className='navbar'>

        <div className="left">
            <h1>Anurag Shukla</h1>
        </div>

        
          <ul className= {showMenu ? 'right' : 'right right_active'}>
            {navData.map((item) => {
              return(
              <Link to={item.link} className='li' onClick={handleMenu} key={item.id} > {item.name} </Link>
              )
            })  }                
          </ul>
            
    
        <div className=" icons " onClick={handleMenu}>
          {showMenu ? <FiMenu/> : <RxCross1/>}
              
        </div>
    </div>
  )
}

export default Navbar