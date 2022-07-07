import { Children, useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {useAuthContext} from "./auth"

const ActivityContext = createContext()

export const ActivityContextProvider = ({children}) => {
    const [activity, setActivity] = useState(null)
    const [initialized, setInitialized] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [ user] = useAuthContext()

    useEffect(() => {
        if(user) {
            setIsLoading(true)
            setError(null)
        }

    }, []) 

    
    
    return (
        

    )
}

export const useActivityContext = ()=> (useContext(ActivityContext))