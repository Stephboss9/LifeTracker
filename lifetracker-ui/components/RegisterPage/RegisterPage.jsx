import React from 'react'
import "./RegisterPage.css"
import RegistrationForm from 'components/RegistrationForm/RegistrationForm'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function RegisterPage({setUserLoggedIn, userLoggedIn}) {
  let navigate = useNavigate()
 useEffect(()=> {
  if(userLoggedIn) {
    navigate('/activity')
  }
 },[userLoggedIn])
  return (

      <div className='registration-page'>
        <h1 className='registration-title'>Register</h1>
        <RegistrationForm setUserLoggedIn = {setUserLoggedIn}/>
      </div>
  )
}
