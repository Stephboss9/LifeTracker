import React from 'react'
import "./NutritionForm.css"

export default function NutritionForm({name, calories, imageUrl, category, quantity}) {
   
  return (
    <form className='nutrition-form'>
        <div className='nutrition-field'>
        <span className='nutrition-input-title'>Name</span>

            <input className='form-input'  placeholder = "apples" name = "name" type = "text" value = ""/>
        </div>
        <div className='nutrition-field'>
        <span className='nutrition-input-title'>Category</span>
        <input className='form-input'  placeholder = "fruit" name = "category" type = "text" value = ""/>
        </div>
        <div className='nutrition-split-field'>

            <div className='nutrition-field'>
                <span className='nutrition-input-title'>Quantity</span>
                <input className='form-input'  placeholder = "2" name = "quantity" type = "number" value = ""/>
            </div>
            
            <div className='nutrition-field'>
                <span className='nutrition-input-title'>Calories</span>
                <input className='form-input'  placeholder = "#calories" name = "Calories" type = "number" value = ""/>
            </div>
            
        </div>
        <div className='nutrition-field'>
        <input className='form-input' placeholder = "place image url here" name = "imageUrl" type = "text" value = ""/>
        </div>
        <button className='submit-nutrition'>Save</button>
    </form>
  )
}
