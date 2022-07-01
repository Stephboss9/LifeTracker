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
      //get the reponse from api after logging in
      let userResponse = await loginUser(currentUser)
      //if valid credentials were used, navigate to activity page, else dont
      if (userResponse.hasOwnProperty('user')){setUserLoggedIn(true);setCorrectInfo(true)
      }else {false; setCorrectInfo(null);}
      setRefresh(!refresh)


       console.log("currentUser in LoginForm is: ", userResponse)
    }
  
  
    return (
    <form className='login-form'>

    <span className = "email-title">Email</span>
      <input className='form-input' placeholder = "type email" name = "email" type = "email" onChange={handleOnInputChange}></input>

      <span className = "email-title">Password</span>
      <input className='form-input' placeholder = "type password" name = "password" type = "password" onChange={handleOnInputChange} ></input>

      {correctInfo===null?<span className='invalid-message'>Invalid Email/Password combo</span>:null}

      <button className='submit-login' type = 'button' onClick={() => {
        handleOnLoginUser(LoginInfo) 
        }
      }
        >Login</button>
    </form>
  )
}
