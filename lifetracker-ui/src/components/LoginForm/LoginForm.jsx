import React from 'react'
import "./LoginForm.css"
import { useAuthContext } from '../../../contexts/auth'
import { useState } from 'react'

export default function LoginForm({ setUserLoggedIn, userLoggedIn}) {

    const {user, setUser, loginUser} = useAuthContext()

    const [LoginInfo, setLoginInfo] = useState({email:"", password:""})

    const handleOnInputChange = (event) => {
        setLoginInfo({ ...LoginInfo, [event.target.name]: event.target.value })
        console.log(LoginInfo)
      }

    const handleOnLoginUser = (user) => {
        loginUser(user)
    }
  
    return (
    <form className='login-form'>

    <span className = "email-title">Email</span>
      <input className='form-input' placeholder = "type email" name = "email" type = "email" onChange={handleOnInputChange}></input>

      <span className = "email-title">Password</span>
      <input className='form-input' placeholder = "type password" name = "password" type = "password" onChange={handleOnInputChange} ></input>

      <button className='submit-login' type = 'button' onClick={() => {setUserLoggedIn(true)
      handleOnLoginUser(LoginInfo)}}>Login</button>
     {console.log(userLoggedIn)}
    </form>
  )
}
