import React from 'react'
import './LandingPage.css'
import HeroImage from "../../assets/rock-climbing.jpg"
import fitness from "../../assets/fitness_icon.png"
import food from "../../assets/food_icon.png"
import planner from "../../assets/planner.jpg"
import rest from "../../assets/rest.webp"
export default function LandingPage() {

  return (
    <div className='landing'>
      <div className='hero'>
        <img src={HeroImage} className = "hero-img"/>
        <div className='intro-text'>
          <h1>Life Tracker</h1>
          <h4>Helping you get back in shape</h4>
        </div>
      </div>
      <div className='activity-icons'>
          <img className = "activity-icon" src = {planner}></img>
          <img className = "activity-icon" src = {food}></img>
          <img className = "activity-icon" src = {fitness}></img>
          <img className = "activity-icon" src = {rest}></img>
        </div>
    </div>
  )
}
