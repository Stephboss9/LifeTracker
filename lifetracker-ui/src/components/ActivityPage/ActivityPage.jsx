import React from 'react'
import { Link } from 'react-router-dom'
import "./ActivityPage.css"
export default function ActivityPage() {
  return (
    <div className='activity-page'>
       <div className='nutrition-page-wrapper'>
        <span className='nutrition-page-title'>Acitivity Feed</span>
        <div className='header-buttons'>
          <Link to="/*"><button className='activity-btn' type = "button"> Add Exercise</button></Link>
          <Link to = "/"><button className='activity-btn'  type = "button"> Log Sleep</button></Link>
          <Link to = "/nutrition/create"><button className='activity-btn nutrition'>Record Nutrition</button></Link>
        </div>
      </div>
      <h1 className='nothing-message'>Nothing Here Yet...</h1>
    </div>
  )
}
