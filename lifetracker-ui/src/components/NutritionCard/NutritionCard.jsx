import React from 'react'
import "./NutritionCard.css"


export default function NutritionCard({imageUrl, name, calories, category, createdAt}) {
  return (
    <div className='nutrition-card'>
        <div className='food-image'><img className='nutrition-image' src = {imageUrl}/></div>
        <div className='nutrition-info-wrapper'>
            <div className='nutrition-info'>
                <span className='nutrition-name'>Apple{name}</span>
                <span className='nutrition-calories'>Calories: 265{calories}</span>
            </div>
           <div className='nutrition-info'>
                <span className='nutrition-category'>Category: Fruit{category}</span>
                <span className='nutrition-date'>Date: 1/21/2022{createdAt}</span>
           </div>
            

        </div>
    </div>

  )
}
