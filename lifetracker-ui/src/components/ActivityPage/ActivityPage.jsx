import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./ActivityPage.css"
import {useActivityContext} from "../../../contexts/activity"
import { useAuthContext } from '../../../contexts/auth'
import Loading from "../Loading/Loading"
import ActivityFeed from 'components/ActivityFeed/ActivityFeed'

export default function ActivityPage() {
  const {activity, refresh, setRefresh} = useActivityContext()
  const {isProcessing} = useAuthContext()
  console.log("activity in activity Page", activity)
  

  return (
    <div className='activity-page'>
    {isProcessing?<Loading/>:<div className='nutrition-page-wrapper'>
        <span className='nutrition-page-title'>Acitivity Feed</span>
        <div className='header-buttons'>
          <Link to="/*"><button className='activity-btn exercise' type = "button"> Add Exercise</button></Link>
          <Link to = "/"><button className='activity-btn sleep'  type = "button"> Log Sleep</button></Link>
          <Link to = "/nutrition/create"><button className='activity-btn nutrition'>Record Nutrition</button></Link>
        </div>
      </div> }
    {activity?<ActivityFeed totalCaloriesPerday={activity.nutrition.calories.perDay} avgCaloriesPerCategory={activity.nutrition.calories.perCategory}/>:null}
    </div>
  )
}
