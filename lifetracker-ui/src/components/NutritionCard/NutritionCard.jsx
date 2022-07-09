import React from 'react'
import "./NutritionCard.css"

import moment from "moment"


export default function NutritionCard({imageUrl, name, calories, category, createdAt, quantity}) {

  return (
    <div className='nutrition-card'>
        <div className='food-image-container'>
          <div className='img-wrapper'><img className='nutrition-image' src = {imageUrl}/></div>
          <div className='nutrition-name'>{name}</div>
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
                <div className='nutrition-category'>{category}</div>
                <div className='nutrition-createdAt'>Today at {moment(createdAt).format('LT')}</div>

           </div>
    </div>

  )
}
