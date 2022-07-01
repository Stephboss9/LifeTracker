import React from 'react'
import "./NutritionCard.css"


export default function NutritionCard({imageUrl, name, calories, category, createdAt}) {
  return (
    <div className='nutrition-card'>
        <div className='food-image'><img className='nutrition-image' src = {imageUrl}/></div>
        <div className='nutrition-info-wrapper'>
            <div className='nutrition-info'>
                <span className='nutrition-name'>{name}</span>
                <span className='nutrition-calories'>Calories: {calories}</span>
            </div>
           <div className='nutrition-info'>
                <span className='nutrition-category'>Category: {category}</span>
                <span className='nutrition-date'>Date: {createdAt}</span>
           </div>
            

        </div>
    </div>

  )
}
