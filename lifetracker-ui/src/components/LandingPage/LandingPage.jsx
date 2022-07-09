import React from 'react'
import './LandingPage.css'
import HeroImage from "../../assets/rock-climbing.jpg"
import fitnessIcon from "../../assets/fitness_icon2.png"
import food from "../../assets/food_icon.png"
import planner from "../../assets/PlannerIcon2.png"
import rest from "../../assets/rest.webp"
import HeroImage2 from "../../assets/rock-climbing2.jpg"
import fitness1 from "../../assets/fitness-img1.png"
import fitness2 from "../../assets/fitness-img2.png"
import fitness3 from "../../assets/fitness3.png"
import { Link  } from 'react-router-dom'
export default function LandingPage({userLoggedIn, setUserLoggedIn}) {

  return (
    <div className='landing'>
      <div className='hero'>
        <div className='cta'>
          <h1 className='landing-title'>LifeTracker</h1>
          <h4 className='landing-title sub'>Helping you get in and stay in shape</h4>
          <h4 className='landing-subtitle'>Get Started <Link className='login-link' to = "/login"><h4 className='landing-subtitle sub'>Here</h4></Link></h4>
        </div>
        <img src={fitness2} className = "hero-img"/>
      </div>
     
    </div>
  )
}
