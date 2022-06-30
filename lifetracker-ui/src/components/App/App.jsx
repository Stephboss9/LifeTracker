import React from 'react';
import Navbar from '../Navbar/Navbar';
import LandingPage from '../LandingPage/LandingPage';
import RegisterPage from 'components/RegisterPage/RegisterPage';
import ActivityPage from 'components/ActivityPage/ActivityPage';
import LoginPage from 'components/LoginPage/LoginPage';
import NutritionPage from 'components/NutritionPage/NutritionPage';
import NotFound from 'components/NotFound/NotFound';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {AuthContextProvider,useAuthContext}  from '../../../contexts/auth';
import Sleep from 'components/Sleep/Sleep';
import { useState } from 'react';
import './App.css';


export default function AppContainer(){
  return (
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
  )
}

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
        <Navbar userLoggedIn = {userLoggedIn} setUserLoggedIn = {setUserLoggedIn}/>
          <Routes>
            <Route path = "/" element ={<LandingPage  userLoggedIn = {userLoggedIn} setUserLoggedIn = {setUserLoggedIn}/>}/> 
            <Route path= "/login" element={<LoginPage userLoggedIn = {userLoggedIn} setUserLoggedIn = {setUserLoggedIn}/>}/>
            <Route path= "/register" element={<RegisterPage setUserLoggedIn={setUserLoggedIn}/>}/>
            <Route path = "/activity" element = {<ActivityPage/>}/>
            <Route path = "/nutrition/*" element = {<NutritionPage/>}/>
            <Route path = "/sleep" element = {<Sleep/>}/>
            <Route path= "*" element ={<NotFound/>}/> 
          </Routes>
        </BrowserRouter>
        </React.Fragment>
    </div>
  )
}
