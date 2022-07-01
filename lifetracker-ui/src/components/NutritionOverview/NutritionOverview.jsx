import React from 'react'
import NutritionFeed from 'components/NutritionFeed/NutritionFeed'
import "./NutritionOverview.css"
import { useNutritionContext } from '../../../contexts/nutrition'
export default function NutritionOverview() {
  const {nutritions} = useNutritionContext()

  return (
    <div className='nutrition-overview'>
      <NutritionFeed nutritions={nutritions}/>
    </div>
  )
}
