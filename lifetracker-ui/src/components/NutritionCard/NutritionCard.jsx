import React from 'react'
import "./NutritionCard.css"


export default function NutritionCard({imageUrl, name, calories, category, createdAt, quantity}) {
  return (
    <div className='nutrition-card'>
        <div className='food-image-container'>
          <img className='nutrition-image' src = {imageUrl}/>
          <span className='nutrition-name'>{name}</span>
        </div>
        <div className='nutrition-info-wrapper'>
            <div className='nutrition-info'>
                <span className='nutrition-calories-title'>Calories</span>
                <span className='nutrition-calories'>{calories}</span>
            </div>
            <div className='nutrition-info'>
                <span className='nutrition-quantity-title'>Quantity</span>
                <span className='nutrition-quantity'>{quantity}</span>
           </div>
        </div>
        <div className='nutrition-footer-info'>
                <span className='nutrition-category'>: {category}</span>
                <span className='nutrition-category'>: {createdAt}</span>

           </div>
    </div>

  )
}
