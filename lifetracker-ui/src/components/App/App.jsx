import React from 'react';
import Navbar from '../Navbar/Navbar';
import LandingPage from '../LandingPage/LandingPage';
import RegisterPage from 'components/RegisterPage/RegisterPage';
import ActivityPage from 'components/ActivityPage/ActivityPage';
import LoginPage from 'components/LoginPage/LoginPage';
import NutritionPage from 'components/NutritionPage/NutritionPage';
import NutritionForm from 'components/NutritionForm/NutritionForm';
import NotFound from 'components/NotFound/NotFound';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {AuthContextProvider,useAuthContext}  from '../../../contexts/auth';
import {NutritionContextProvider} from "../../../contexts/nutrition"
import {ActivityContextProvider} from "../../../contexts/activity"
import AccessForbidden from 'components/AccessForbidden/AccessForbidden';
import Sleep from 'components/Sleep/Sleep';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import NutritionNew from 'components/NutritionNew/NutritionNew';
import NutritionCard from 'components/NutritionCard/NutritionCard';
import NutritionOverview from 'components/NutritionOverview/NutritionOverview';


export default function AppContainer(){

  
  
  return (
    <AuthContextProvider>
        <ActivityContextProvider>
                <NutritionContextProvider>
                    <App/>
                </NutritionContextProvider>
        </ActivityContextProvider>
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
            <Route path = "/exercise" element = {userLoggedIn?<ActivityPage/>:<AccessForbidden/>}/>
            <Route path = "/activity" element = {userLoggedIn?<ActivityPage/>:<AccessForbidden/>}/>
            <Route path = "/nutrition/*" element = {userLoggedIn?<NutritionPage/>:<AccessForbidden/>}/>
            <Route path = "/sleep" element = {userLoggedIn?<Sleep/>:<AccessForbidden/>}/>
            <Route path= "*" element ={<NotFound/>}/> 
          </Routes>
        </BrowserRouter>
        </React.Fragment>
    </div>
  )
}
