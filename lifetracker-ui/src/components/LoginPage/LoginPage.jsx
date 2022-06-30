import React from 'react'
import "./LoginPage.css"

export default function LoginPage({setUserLoggedIn, userLoggedIn}) {
  return (
    <div className='login-page'>
      <h1 className='login-title'>Login</h1>
      <form className='login-form'>

      <span className = "email-title">Email</span>
        <input className='form-input' placeholder = "type email" name = "email" type = "email" ></input>

        <span className = "email-title">Password</span>
        <input className='form-input' placeholder = "type password" name = "name" type = "password" ></input>

        <span className='submit-login' onClick={() => {setUserLoggedIn(true)}}>Login</span>
       {console.log(userLoggedIn)}
      </form>
    </div>
  )
}
