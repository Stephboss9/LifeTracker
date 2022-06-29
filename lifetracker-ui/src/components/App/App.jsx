import React from 'react';
import Navbar from '../Navbar/Navbar';
import LandingPage from '../LandingPage/LandingPage';
import RegisterPage from 'components/RegisterPage/RegisterPage';
import ActivityPage from 'components/ActivityPage/ActivityPage';
import LoginPage from 'components/LoginPage/LoginPage';
import NutritionPage from 'components/NutritionPage/NutritionPage';
import NotFound from 'components/NotFound/NotFound';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Sleep from 'components/Sleep/Sleep';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path = "/" element ={<LandingPage />}/> 
        <Route path= "/login" element={<LoginPage/>}/>
        <Route path= "/register" element={<RegisterPage/>}/>
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
