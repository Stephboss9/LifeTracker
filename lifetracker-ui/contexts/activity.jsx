import { Children, useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {useAuthContext} from "./auth"
import ApiClient from "../services/apiClient";

const ActivityContext = createContext()

export const ActivityContextProvider = ({children}) => {
    const client = new ApiClient()
    const [refresh, setRefresh] = useState(false)
    const [activity, setActivity] = useState(null)
    const [initialized, setInitialized] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const {user, userChanged} = useAuthContext()

    useEffect(async () => {
        console.log("Current user in Activity Context: ", user)
        if(user) {
            setIsLoading(true)
            setError(null)
            const {activities, error} = await client.getActivity(user)
            setActivity(activities);
            setError(error)
        }
        setIsLoading(false)
        setInitialized(true)

    }, [user, userChanged]) 

    const authValue = {activity, initialized, isLoading, error, user, refresh, setRefresh}

    
    return (
        
        <ActivityContext.Provider value = {authValue} >
        <>{children}</>
        </ActivityContext.Provider>
    )
}

export const useActivityContext = ()=> {return useContext(ActivityContext)}