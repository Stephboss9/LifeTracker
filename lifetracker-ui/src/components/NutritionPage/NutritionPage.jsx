import NutritionOverview from 'components/NutritionOverview/NutritionOverview'
import NutritionDetail from "../NutritionDetail/NutritionDetail"
import NotFound from 'components/NotFound/NotFound'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import "./NutritionPage.css"
import NutritionNew from 'components/NutritionNew/NutritionNew'
export default function NutritionPage() {

  return (
    
    <div className='nutrition-page'>
      <Routes>
        <Route path='/nutrition' element = {NutritionOverview}/>
        <Route path='/nutrition/create' element = {NutritionNew}/>
        <Route path='/nutrition/id/:nutritionId' element = {NutritionDetail}/>
        <Route path='*' element = {NotFound}/>
      </Routes>
      
      <div className='nutrition-page-wrapper'>
        <span className='nutrition-page-title'>Acitivity Feed</span>
        <div className='header-buttons'>
          <Link to="/"><button className='activity-btn' type = "button"> Add Exercise</button></Link>
          <Link to = "/"><button className='activity-btn'  type = "button"> Log Sleep</button></Link>
          <Link to = "/nutrition/create"><button className='activity-btn nutrition'  type = "button">Record Nutrition</button></Link>
        </div>
      </div>
      <h1 className='nothing-message'>Nothing Here Yet...</h1>
    </div>
  )
}
