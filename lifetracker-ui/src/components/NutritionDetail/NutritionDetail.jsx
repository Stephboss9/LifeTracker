import React, { useEffect } from 'react'
import { useState } from 'react'
import ApiClient from '../../../services/apiClient'
import Loading from 'components/Loading/Loading'
import NotFound from 'components/NotFound/NotFound'
import NutritionCard from 'components/NutritionCard/NutritionCard'
import { useParams } from 'react-router-dom'
import { useNutritionContext } from '../../../contexts/nutrition'

export default function NutritionDetail() {
  const [nutrition,  setNutrition] = useState(null)
  const {nutritionId} = useParams()
  const apiClient = new ApiClient()
  const {error, setError } = useNutritionContext()

  useEffect( async ()=> {
    let {data, error} = await apiClient.getNutritionById(nutritionId)
    if (data) {setNutrition(data.nutrition)}
    if (error) {setError(error)}
  }, [])

  return (
    <div className='nutrition-detail'>
        {nutrition?<NutritionCard imageUrl={nutrition.image_url} name = {nutrition.name} calories = {nutrition.calories}
        category = {nutrition.category} createdAt = {nutrition.createdAt} quantity = {nutrition.quantity}  />:<Loading/>}
    </div>
  )
}
/**
 * https://steph-lifetracker-app.herokuapp.com/
 */