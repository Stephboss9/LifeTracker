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
          <h1>LifeTracker</h1>
          <h4>Helping you get in and stay in shape</h4>
          {!userLoggedIn?<Link to = "/register"  className = "link" > <button className = "nav-link sign-up" href='#s'>Sign Up</button></Link>:null}
        </div>
        <img src={fitness2} className = "hero-img"/>
      </div>
      <div className='activity-icons'>
          <div className='activity-wrapper'> <img className = "activity-icon planner" src = {planner}></img> 
          <h2 className='icon-sub'>Planning</h2>
        </div>
        <div className='activity-wrapper'>
          <img className = "activity-icon food" src = {food}></img>
          <h2 className='Food'>Food</h2>
        </div>
            <div className='activity-wrapper'> <img className = "activity-icon fitness" src = {fitnessIcon}></img> 
            <h2 className='Fitness'>Fitness</h2>
        </div>
            <div className='activity-wrapper'>  <img className = "activity-icon rest" src = {rest}></img>
            <h2 className='Rest'>Rest</h2>
        </div>
        
        </div>
    </div>
  )
}
