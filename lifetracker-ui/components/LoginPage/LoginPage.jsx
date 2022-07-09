import React, { useEffect } from 'react'
import "./LoginPage.css"
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import LoginForm from 'components/LoginForm/LoginForm'
import cool from "../../assets/My project.png"

export default function LoginPage({setUserLoggedIn, userLoggedIn}) {

let navigate = useNavigate()
 useEffect(()=> {
  if(userLoggedIn) {
    navigate('/activity')
  }
 },[userLoggedIn])

  
  return (
    <div className='login-page'>
     <h1 className='login-title'>Login</h1>
      {<LoginForm setUserLoggedIn= {setUserLoggedIn} userLoggedIn = {userLoggedIn}/>}
    </div>
  )
}
