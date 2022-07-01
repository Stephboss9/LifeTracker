import React from 'react'
import "./Nutrition.css"
import NutritionCard from "../NutritionCard/NutritionCard"

export default function NutritionFeed({nutritions}) {
    <div className='nutrition-feed'>
      {nutritions?nutritions.map(nutrition => {
        return (<NutritionCard imageUrl = {nutrition.imageUrl} name = {nutrition.name} calories = {nutrition.calories} category = {nutrition.category} createdAt = {nutrition.createdAt}/>)
      }):<span className='empty-message'></span>}
    </div>
  }
  