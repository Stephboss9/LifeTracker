import React from 'react'
import "./RegisterPage.css"
import RegistrationForm from 'components/RegistrationForm/RegistrationForm'

export default function RegisterPage({setUserLoggedIn}) {
  return (

      <div className='registration-page'>
        <h1 className='registration-title'>Register</h1>
        <RegistrationForm setUserLoggedIn = {setUserLoggedIn}/>
      </div>
  )
}
