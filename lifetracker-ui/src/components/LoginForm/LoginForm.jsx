import React from 'react'
import "./LoginForm.css"
import { useAuthContext } from '../../../contexts/auth'
import { useState } from 'react'
import ApiClient from '../../../services/apiClient'
import { Link } from 'react-router-dom'


export default function LoginForm({ setUserLoggedIn, userLoggedIn}) {

    const [correctInfo, setCorrectInfo] = useState(null)

    const [LoginInfo, setLoginInfo] = useState({email:"", password:""})
    const [loginError, setLoginError] = useState(null)
    const {user,loginUser, userChanged, setUserChanged, setIsProcessing} = useAuthContext()
    let client = new ApiClient()
    const handleOnInputChange = (event) => {
        setLoginInfo({ ...LoginInfo, [event.target.name]: event.target.value })
      }

    const handleOnLoginUser = async (currentUser) => {
      //get the reponse from api after logging in
      let {data, error} = await loginUser(currentUser)
      if(data) {client.setToken(data.token)}
      if (error) {setLoginError(error)}
      if(data) {client.setToken(data.token)}

      //if valid credentials were used, navigate to activity page, else dont
      setUserChanged(!userChanged)

      if (data){setUserLoggedIn(true);setCorrectInfo(true)
      }else {setCorrectInfo(false); }
      setIsProcessing(false)
    }
  
  
    return (
    <div className='login-form-wrapper'>

      <form className='login-form'>
      <h2 className='login-form-title'>Login To User Account</h2>
        <div className='input-forms'>
        <div className='input-form'>
          <span className = "input-title">Email</span>
          <input className='form-input login glowing-border' placeholder = "type email" name = "email" type = "email" onChange={handleOnInputChange}></input>
       </div>
        
        <div className='input-form'>
          <span className = "input-title">Password</span>
          <input className='form-input login glowing-border' placeholder = "type password" name = "password" type = "password" onChange={handleOnInputChange} ></input>
        </div>
        </div>
        {correctInfo === false?<span className='error'>{loginError}</span>:null}
        <button className='submit-login' type = 'button' onClick={() => {
          handleOnLoginUser(LoginInfo) 
          }
        }
          >Login</button>
    </form>
      <div className='login-footer'>
          <h4 className='question'>Don't have an account? <Link className = "signUp-here" to = "/register"><span className='signUp-here'>Signup Here!</span></Link></h4>
      </div>
    </div>
  )
}
