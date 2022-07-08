import React from 'react'
import "./Nutrition.css"
import NutritionCard from "../NutritionCard/NutritionCard"
import { Link } from 'react-router-dom'

export default function NutritionFeed({nutritions}) {
  return (
    <div className='nutrition-feed'>
      {nutritions?nutritions?.map((nutrition, index) => {
        return (<Link to = {`/nutrition/id/${nutrition.id}`}><NutritionCard key = {index} quantity = {nutrition.quantity} imageUrl = {nutrition.image_url} name = {nutrition.name} calories = {nutrition.calories} category = {nutrition.category} createdAt = {nutrition.created_at}/></Link>
)
      }):<span className='empty-message'></span>}
    </div>
  )
  }
  