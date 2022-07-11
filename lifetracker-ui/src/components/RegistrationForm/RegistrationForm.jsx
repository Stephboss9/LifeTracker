import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuthContext } from '../../../contexts/auth'
import "./RegistrationForm.css"

import ApiClient from '../../../services/apiClient'

export default function RegistrationForm({setUserLoggedIn}) {
  const {setIsProcessing, signupUser, user, setUser, userChanged, setUserChanged, loginUser, setError}= useAuthContext()
  let client = new ApiClient()

  const [registrationForm, setRegistrationForm] = useState({email:"", userName:"", firstName:"", lastName:"", password:"", passwordConfirm:""})
  const [passwordsMatch, setPasswordsMatch] = useState(null)
  const handleOnInputChange = (event) => {
    setRegistrationForm({ ...registrationForm, [event.target.name]: event.target.value })
  }

  const handleOnRegistrateUser = async (user) => {
       
        let {data, error} =  await signupUser(user)
        if (error) {setError(error)}  
        if(data){client.setToken(data.token); loginUser(user)}
        console.log(  window.localStorage.getItem("lifetracker_token"))
        setUserChanged(!userChanged)
     
  }
  const checkPasswords = (registrationForm) => { 
    console.log("passwords check", registrationForm.password, registrationForm.passwordConfirm)
    if(registrationForm.password ==='' && registrationForm.passwordConfirm === ''){
      return false
    }
    else if (registrationForm.password === registrationForm.passwordConfirm) {
      setPasswordsMatch(null)
      return true
    } else {
      return false
    }

}

  return (
    <div className='registration-form-wrapper'>
           <form className='registration-form'>
            <h2 className='registration-form-title'>Create an Account</h2>
            <div className='input-field'>
            <span className = "input-title">Email</span>
            <input className='form-input glowing-input-border' placeholder = "type email" name = "email" type = "email" value = {registrationForm.email} onChange={handleOnInputChange} ></input>
            </div>
            <div className='input-field'>
            <span className = "input-title">Username</span>
            <input className='form-input glowing-input-border' placeholder = "type username" name = "userName" type = "text"  value = {registrationForm.userName} onChange={handleOnInputChange}></input>
            </div>
            <div className='split-input'>
              <div className='input-field'>
                <span className = "input-title">First Name</span>
                <input className='form-input glowing-input-border' placeholder = "type first name" name = "firstName" type = "text"  value = {registrationForm.firstName} onChange={handleOnInputChange}></input>
              </div>
              <div className='input-field'>
                <span className = "input-title">Last Name</span>
                <input className='form-input glowing-input-border' placeholder = "type last name" name = "lastName" type = "text" value = {registrationForm.lastName} onChange={handleOnInputChange} ></input>
              </div>
            </div>
            <div className='input-field'>
              <span className = "input-title">Password</span>
              <input className='form-input glowing-input-border' placeholder = "type password" name = "password" type = "password" value = {registrationForm.password} onChange={handleOnInputChange}></input>
            </div>
            <div className='input-field'>
              <span className = "input-title">Confirm </span>
              <input className='form-input glowing-input-border' placeholder = "confirm password" name = "passwordConfirm" type = "password" onChange={handleOnInputChange}></input>
            </div>
            {passwordsMatch === false?<span className='error'>passwords don't match</span>:null}
            <button className='submit-registration' type = "button" onClick={() => {
              if(checkPasswords(registrationForm)) {
                setUserLoggedIn(true)
                handleOnRegistrateUser(registrationForm)
                console.log(user)

              } else {setPasswordsMatch(false)}
            }}>Create Account</button>
        </form>
        <div className='login-footer'>
          <h4 className='question'>Already have an account? <Link className = "login-here" to = "/login"><span className='login-here'>Login Here!</span></Link></h4>
      </div>
    </div>
     
  )
}
