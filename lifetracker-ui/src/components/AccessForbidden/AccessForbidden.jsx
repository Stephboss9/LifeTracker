import React from 'react'
import { Link } from 'react-router-dom'
import "./AccessForbidden.css"

export default function AccessForbidden() {
  return (
    <div className='access-forbidden'>
    <h1 className='forbidden-title'>Access Forbidden...</h1>
    <h1 className='forbidden-subtitle'> If you have an account <Link className = "login-here" to = "/login"><span className='login-here'>Login</span></Link>, or get started 
     <Link className = "signUp-here" to = "/register"><span className='signUp-here'> Here!</span></Link></h1></div>
  )
}
