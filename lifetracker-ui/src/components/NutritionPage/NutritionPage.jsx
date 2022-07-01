import NutritionOverview from 'components/NutritionOverview/NutritionOverview'
import NutritionNew from "../NutritionNew/NutritionNew"
import NutritionDetail from "../NutritionDetail/NutritionDetail"
import NotFound from 'components/NotFound/NotFound'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
export default function NutritionPage() {

  return (
    
    <div className='nutrition-page'>
         <Routes>
      <Route path='/nutrition' element = {NutritionOverview}/>
      <Route path='/nutrition/create' element = {NutritionNew}/>
      <Route path='/nutrition/id/:nutritionId' element = {NutritionDetail}/>
      <Route path='*' element = {NotFound}/>
    </Routes>

    </div>
  )
}
