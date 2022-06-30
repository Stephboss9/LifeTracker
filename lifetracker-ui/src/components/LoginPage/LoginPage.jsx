import React from 'react'
import "./LoginPage.css"
import {useAuthContext } from "../../../contexts/auth"
import { useState } from 'react'

export default function LoginPage({setUserLoggedIn, userLoggedIn}) {
  const {user, setUser, loginUser} = useAuthContext()
  const [LoginInfo, setLoginInfo] = ({email:"", password:""})

  const handleOnInputChange = (event) => {
    setLoginInfo({ ...loginForm, [event.target.name]: event.target.value })
  }
  return (
    <div className='login-page'>
      <h1 className='login-title'>Login</h1>
      <form className='login-form'>

      <span className = "email-title">Email</span>
        <input className='form-input' placeholder = "type email" name = "email" type = "email" onChange={handleOnInputChange}></input>

        <span className = "email-title">Password</span>
        <input className='form-input' placeholder = "type password" name = "name" type = "password" onChange={handleOnInputChange} ></input>

        <span className='submit-login' onClick={() => {setUserLoggedIn(true)}}>Login</span>
       {console.log(userLoggedIn)}
      </form>
    </div>
  )
}
