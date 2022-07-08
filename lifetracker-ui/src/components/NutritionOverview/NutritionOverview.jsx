import React from 'react'
import NutritionFeed from 'components/NutritionFeed/NutritionFeed'
import "./NutritionOverview.css"
import { useNutritionContext } from '../../../contexts/nutrition'
import { Link } from 'react-router-dom'

export default function NutritionOverview() {
  const {nutritions} = useNutritionContext()
  console.log("Nutritions array in nutritionOverview jsx", nutritions)
  

  return (
    <div className='nutrition-overview-wrapper'>
    <div className='overview-content'>
      <h2 className='overview-title'>Overview</h2>
      <Link to ="/nutrition/create"><button className='record-btn'>Record Nutrition</button></Link>
    </div>
         <div className='nutrition-overview'>
            <NutritionFeed nutritions={nutritions}/>
        </div>
    </div>
   
  )
}
