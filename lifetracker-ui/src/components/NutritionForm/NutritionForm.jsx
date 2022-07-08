import React, { useState } from 'react'
import "./NutritionForm.css"
import { useNutritionContext } from '../../../contexts/nutrition'
import { useAuthContext } from '../../../contexts/auth'
import { Link } from 'react-router-dom'

export default function NutritionForm({name, calories, imageUrl, category, quantity}) {
    const {refresh, setRefresh, pushNutrition} = useNutritionContext()
    const {user, userChanged, setUserChanged} = useAuthContext()
    const [nutritionForm, setNutritionForm] = useState({name:"", category:"", quantity:0, imageUrl:"",calories:0, user_id:user.user.id})



   const handleOnSubmitNutritionForm = async (nutritionForm) => {
        let user_id = "user_id"
        setUserChanged(!userChanged)
        console.log("user_id", user.user.id)
        setNutritionForm[{...nutritionForm, [user_id]: user.user.id}]
        console.log("nutrition form", nutritionForm)
       await pushNutrition(nutritionForm)
        setUserChanged(!userChanged)

   }

   const handleOnInputChange = (event) => {
    setNutritionForm({ ...nutritionForm, [event.target.name]: event.target.value })
   }
   
  return (
    <form className='nutrition-form'>
        <div className='nutrition-field'>
        <span className='nutrition-input-title'>Name</span>

            <input className='form-input'  placeholder = "apples" name = "name" type = "text" onChange = {handleOnInputChange} value = {nutritionForm.name}/>
        </div>
        <div className='nutrition-field'>
        <span className='nutrition-input-title'>Category</span>
        <input className='form-input'  placeholder = "fruit" name = "category" type = "text"  onChange = {handleOnInputChange} value = {nutritionForm.category}/>
        </div>
        <div className='nutrition-split-field'>

            <div className='nutrition-field'>
                <span className='nutrition-input-title'>Quantity</span>
                <input className='form-input'  placeholder = "2" name = "quantity" type = "number"  onChange = {handleOnInputChange} value = {nutritionForm.quantity}/>
            </div>
            
            <div className='nutrition-field'>
                <span className='nutrition-input-title'>Calories</span>
                <input className='form-input'  placeholder = "#calories" name = "calories" type = "number"  onChange = {handleOnInputChange} value = {nutritionForm.calories}/>
            </div>
            
        </div>
        <div className='nutrition-field'>
        <input className='form-input' placeholder = "place image url here" name = "imageUrl" type = "text"  onChange = {handleOnInputChange} value = {nutritionForm.imageUrl}/>
        </div>
        <Link to='/nutrition'><button type = "button" className='submit-nutrition' onClick={()=> {
            setRefresh(!refresh)
            handleOnSubmitNutritionForm(nutritionForm)
            setRefresh(!refresh)
        }}>Save</button></Link>
    </form>
  )
}
