import NutritionOverview from 'components/NutritionOverview/NutritionOverview'
import NutritionDetail from "../NutritionDetail/NutritionDetail"
import NotFound from 'components/NotFound/NotFound'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import "./NutritionPage.css"
import NutritionNew from 'components/NutritionNew/NutritionNew'
import {NutritionContextProvider, useNutritionContext} from "../../../contexts/nutrition"


export default function NutritionPage() {
  return (
    
    
    <div className='nutrition-page'>
    <div className = "page-header"><h1 className='nutrition-header'>Nutrition</h1></div>
      <Routes>
        <Route path='/' element = {<NutritionOverview/>}/>
        <Route path='/create' element = {<NutritionNew/>}/>
        <Route path='/id/:nutritionId' element = {<NutritionDetail/>}/>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
      
     
    </div>
  )
}
