import React from 'react'
import "./LoginForm.css"
import { useAuthContext } from '../../../contexts/auth'
import { useState } from 'react'
import ApiClient from '../../../services/apiClient'

export default function LoginForm({ setUserLoggedIn, userLoggedIn}) {

    const [correctInfo, setCorrectInfo] = useState(null)

    const [LoginInfo, setLoginInfo] = useState({email:"", password:""})

    const {user, setError, error, loginUser, userChanged, setUserChanged, setIsProcessing} = useAuthContext()
    let client = new ApiClient()
    const handleOnInputChange = (event) => {
        setLoginInfo({ ...LoginInfo, [event.target.name]: event.target.value })
      }

    const handleOnLoginUser = async (currentUser) => {
      //get the reponse from api after logging in
      let {data, error} = await loginUser(currentUser)
      if(data) {client.setToken(data.token)}
      if (error) {setError(error)}
      console.log(error)
      if(data) {client.setToken(data.token)}
      console.log("Login Response", data)

      //if valid credentials were used, navigate to activity page, else dont
      setUserChanged(!userChanged)

      if (data){setUserLoggedIn(true);setCorrectInfo(true)
      }else {setCorrectInfo(false); }
      setIsProcessing(false)
    }
  
  
    return (
    <form className='login-form'>

    <span className = "email-title">Email</span>
      <input className='form-input' placeholder = "type email" name = "email" type = "email" onChange={handleOnInputChange}></input>

      <span className = "email-title">Password</span>
      <input className='form-input' placeholder = "type password" name = "password" type = "password" onChange={handleOnInputChange} ></input>

      {correctInfo === false?<span className='error'>{error}</span>:null}
      <button className='submit-login' type = 'button' onClick={() => {
        handleOnLoginUser(LoginInfo) 
        }
      }
        >Login</button>
    </form>
  )
}
