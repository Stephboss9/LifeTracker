import React from "react"
import {useAuthContext} from "./auth"
import ApiClient from "../services/apiClient"
import { createContext, useEffect, useState, useContext } from "react"


const NutritionContext = createContext()

export const NutritionContextProvider = ({children}) => {
    let client = new ApiClient()
    //define necessary states
    const [nutritions, setNutritions] = useState(null)
    const [initialized, setInitialized] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const {user} = useAuthContext()

  
    useEffect(async () => {
        if(user) {
            setIsLoading(true)
            setInitialized(true)
            setError(null)
            try {
                setNutritions(await client.getNutrition(user.id))
                setError(null)
            }catch(err){
                setError(err)
            }
        }
        setInitialized(true)
        setIsLoading(false)
    },[])


    

    const authValue = {nutritions, initialized, isLoading, error}

    //check if jwt token exists
   
            //any children nested in the the Authcontext provider can get access to
    {
        return (
            <NutritionContext.Provider value = {authValue} >
            <>{children}</>
            </NutritionContext.Provider>
        )

    }

}
export const useNutritionContext = () => {return useContext(NutritionContext)}






