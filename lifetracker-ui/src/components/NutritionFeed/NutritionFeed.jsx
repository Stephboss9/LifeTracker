import React from 'react'
import "./Nutrition.css"
import NutritionCard from "../NutritionCard/NutritionCard"

export default function NutritionFeed({nutritions}) {
  return (
    <div className='nutrition-feed'>
      {nutritions?nutritions?.map(nutrition => {
        return (<NutritionCard imageUrl = {nutrition.image_url} name = {nutrition.name} calories = {nutrition.calories} category = {nutrition.category} createdAt = {nutrition.created_at}/>)
      }):<span className='empty-message'></span>}
    </div>
  )
  }
  