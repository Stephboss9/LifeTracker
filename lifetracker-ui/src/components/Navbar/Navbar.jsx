import React from 'react'
import Logo from "../../assets/codepath-transparent.png"
import Logo2 from "../../assets/codepath_2.svg"
import {  Link } from 'react-router-dom';
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='navbar'> 
      <div className='navbar-contents'>
        <Link to = "/"><img src = {Logo} className = "logo" alt = "Codepath logo"/></Link>
        <div className='links'>
          <Link to = "/activity"  className = "link" ><span className = "nav-link" href='#s'>Activity</span></Link>
          <Link to = "/exercise"  className = "link" ><span className = "nav-link" href='#s'>Exercise</span></Link> 
          <Link to = "/nutrition/*"  className = "link" ><span className = "nav-link" href='#s'>Nutrition</span></Link>
          <Link to = "/sleep"  className = "link" ><span className = "nav-link" href='#s'>Sleep</span></Link> 
          <Link to = "/login"  className = "link" ><span className = "nav-link" href='#s'>Login</span></Link> 
          <Link to = "/register"  className = "link" > <span className = "nav-link sign-up" href='#s'>SignUp</span></Link>
        </div>
      </div>
    </div>
  )
}
