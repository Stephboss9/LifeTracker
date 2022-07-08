import React from "react"
import {useAuthContext} from "./auth"
import ApiClient from "../services/apiClient"
import { createContext, useEffect, useState, useContext } from "react"


const NutritionContext = createContext()

export const NutritionContextProvider = ({children}) => {
    let client = new ApiClient()
    //define necessary states
    const [refresh, setRefresh] = useState(false)
    const [nutritions, setNutritions] = useState(null)
    const [initialized, setInitialized] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const {user} = useAuthContext()

    const pushNutrition = async (nutritionInfo) => {
        console.log("this one", nutritionInfo)
       await client.pushNutrition(nutritionInfo, user.user.id)
    }
    useEffect(async () => {
        if(user) {
            setIsLoading(true)
            setInitialized(true)
            setError(null)
            try {
                let {data, error} = await client.getNutrition(user.user.id)
                setNutritions(data.nutritions)
                if (error) {setError(error)}
                setError(null)
            }catch(err){
                setError(err)
            }
        }
        setInitialized(true)
        setIsLoading(false)
    },[user])


    

    const authValue = {nutritions, initialized, isLoading, error, refresh, setRefresh, pushNutrition}

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






