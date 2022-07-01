import React from 'react'
import "./NutritionNew.css"
import NutritionForm from "../NutritionForm/NutritionForm"


export default function NutritionNew({name, calories, imageUrl, category}) {
  return (
    <div className='nutrition-new'>
        <h1 className='nutrition-title'>Record Nutrition</h1>
      <NutritionForm name = {name} calories = {calories} imageUrl = {imageUrl} category = {category}/>
    </div>
  )
}
