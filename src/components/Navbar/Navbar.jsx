import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
function Navbar() {
  return (
    <div>
      <header>
        <div className="logo">GetSkills.com</div>
        <nav>
          <ul>
            <Link to='/'><li><a >Home</a></li></Link>
            <Link to='/course'><li><a >Courses</a></li></Link>
            <Link to='/about'><li><a >About</a></li></Link>
            <Link to='/contact'><li><a >Contact us</a></li></Link>
            <Link to='/services'><li><a >Services</a></li></Link>
            <Link to='/profile'><li><a className='profile'><CgProfile /></a></li></Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
