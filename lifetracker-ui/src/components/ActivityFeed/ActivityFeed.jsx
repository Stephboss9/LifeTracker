import React from 'react'
import SummaryStat from 'components/SummaryStat/SummaryStat'
import "./ActivityFeed.css"

export default function ActivityFeed({totalCaloriesPerday, avgCaloriesPerCategory}) {
  return (
    <div className='activity-feed'> 
        <div className='activity-feed-wrapper'>
            <div className="per-category">
                <h4 className = "day-title">Total Calories Per Day</h4>
                <div className = "avg-card-grid">
                    {avgCaloriesPerCategory.map((categoryCalories, index) => {
                        if(index < 6){

                        return (<SummaryStat key = {index} label = {"calories"} stat = {categoryCalories.avgCaloriesPerCategory} substat = {categoryCalories.category} isDate = {false}/>)
                        }
                    })}
                </div>
            </div>
            <div className="per-day">
                <h4 className = "day-title">Average Calories Per Category</h4>
                <div className = "total-card-grid">
                    {totalCaloriesPerday.map((categoryCalories, index) => {
                        if(index < 6){
                        return (<SummaryStat key = {index} label = {"calories"} stat = {categoryCalories.totalCaloriesPerDay} substat = {categoryCalories.date} isDate = {true}/>)
                        }
                    })}
                </div>
            </div>
        </div>
    
    
    
    
    </div>
  )
}
