import React, { useEffect } from 'react'
import Logo from "../../assets/codepath-transparent.png"
import Logo2 from "../../assets/codepath_2.svg"
import {  Link } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/auth'
import { Navigate, useNavigate } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar({userLoggedIn, setUserLoggedIn}) {


  return (
    <div className='navbar'> 
      <div className='navbar-contents'>
        <Link to = "/"><img src = {Logo} className = "logo" alt = "Codepath logo"/></Link>
        <NavLinks userLoggedIn = {userLoggedIn} setUserLoggedIn = {setUserLoggedIn}/>
      </div>
    </div>
  )
}

export function NavLinks({userLoggedIn, setUserLoggedIn}) {
  const {logoutUser} = useAuthContext()

  let  navigate = useNavigate()
  useEffect(() => {
    if(userLoggedIn){
      navigate("/")
    }
  },[userLoggedIn])
  return (
    <div className='nav-links'>
    <Link to = "/activity" className = "link" ><span className = "nav-link" href='#s'>Activity</span></Link>
    <Link to = "/exercise" className = "link" ><span className = "nav-link" href='#s'>Exercise</span></Link> 
    <Link to = "/nutrition" className = "link" ><span className = "nav-link" href='#s'>Nutrition</span></Link>
    <Link to = "/sleep" className = "link" ><span className = "nav-link" href='#s'>Sleep</span></Link> 
    {!userLoggedIn?<Link to = "/login" className = "link login" ><button type = "button" className = "nav-link button" href='#s'>Login</button></Link>:null}
    {!userLoggedIn?<Link to = "/register"  className = "link signup" > <button type = "button" className = "nav-link sign-up" href='#s'>Sign Up</button></Link>:null}
    {!userLoggedIn?null:  <Link to = "/"  className = "link" > <span onClick = {() => 
    {setUserLoggedIn(false);
    logoutUser()
    navigate("/")
    }} className = "link nav-link logout-button">Sign Out</span></Link>}
  
  </div>
  )
}
