import React from 'react'
import "./RegisterPage.css"

export default function RegisterPage() {
  return (

      <div className='registration-page'>
        <h1 className='registration-title'>Register</h1>
        <form className='registration-form'>

          <div className='input-field'>
            <span className = "input-title">Email</span>
            <input className='form-input' placeholder = "type email" name = "email" type = "email" ></input>
          </div>
          <div className='input-field'>
          <span className = "input-title">Username</span>
          <input className='form-input' placeholder = "type username" name = "username" type = "text" ></input>
          </div>
          <div className='input-field'>
            <span className = "input-title">First Name</span>
            <input className='form-input' placeholder = "type first name" name = "firstName" type = "text" ></input>
          </div>
          <div className='input-field'>
             <span className = "input-title">Last Name</span>
            <input className='form-input' placeholder = "type last name" name = "lastName" type = "text" ></input>
          </div>
        <div className='input-field'>
            <span className = "input-title">Password</span>
            <input className='form-input' placeholder = "type password" name = "password" type = "password" ></input>
        </div>
         <div className='input-field'>
            <span className = "input-title">Confirm </span>
            <input className='form-input' placeholder = "confirm password" name = "passwordConfirm" type = "password" ></input>
         </div>
          <button className='submit-registration'>Create Account</button>
        </form>
      </div>
  )
}
