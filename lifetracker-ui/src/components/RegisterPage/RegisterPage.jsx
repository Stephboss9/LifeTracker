import React from 'react'

export default function RegisterPage() {
  return (

      <div className='login'>
        <h1 className='login-title'>Login</h1>
        <form className='login-form'>
  
        <span className = "email-title">Email</span>
          <input className='form-input' placeholder = "type email" name = "email" type = "email" ></input>
  
          <span className = "email-title">Password</span>
          <input className='form-input' placeholder = "type password" name = "name" type = "password" ></input>
  
          <button className='submit-login'>Login</button>
        </form>
      </div>
  )
}
