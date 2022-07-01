import React from 'react'
import "./LoginForm.css"
import { useAuthContext } from '../../../contexts/auth'
import { useState } from 'react'

export default function LoginForm({ setUserLoggedIn, userLoggedIn}) {

    const [correctInfo, setCorrectInfo] = useState(false)

    const [LoginInfo, setLoginInfo] = useState({email:"", password:""})

    const {user,setUser, error, loginUser, refresh, setRefresh} = useAuthContext()

    const handleOnInputChange = (event) => {
        setLoginInfo({ ...LoginInfo, [event.target.name]: event.target.value })
      }

    const handleOnLoginUser = async (currentUser) => {
      let userResponse = await loginUser(currentUser)
      if (refresh){setRefresh(false)}else {setRefresh(true)}
       console.log("currentUser in LoginForm is: ", userResponse)
       console.log(userResponse.user)
       console.log("user object: ",user)
       if(userResponse.hasOwnProperty("user")){return userResponse.user}else {return null}
    }
  
  
    return (
    <form className='login-form'>

    <span className = "email-title">Email</span>
      <input className='form-input' placeholder = "type email" name = "email" type = "email" onChange={handleOnInputChange}></input>

      <span className = "email-title">Password</span>
      <input className='form-input' placeholder = "type password" name = "password" type = "password" onChange={handleOnInputChange} ></input>

      {correctInfo===null?<span className='invalid-message'>Invalid Email/Password combo</span>:null}

      <button className='submit-login' type = 'button' onClick={() => {
        if(handleOnLoginUser(LoginInfo) != null){
          setUserLoggedIn(true)
          }else {setUserLoggedIn(false)}
        }
      }
        >Login</button>
    </form>
  )
}
