import React from "react"
import { createContext, useEffect, useState, useContext } from "react"

import apiClient  from "../services/apiClient"

const AuthContext = createContext(null)

export const AuthContextProvider = ({children}) => {
    let client = new apiClient()
    //define necessary states
    const [user, setUser] = useState(null)
    const [initialized, setInitialized] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [error, setError] = useState(null)

    
    const loginUser = (user)=> {
        client.login(user)
    }
    const signupUser = (user)=> {
        client.register(user)

    }
    const fetchUserFromToken = ()=> {
        setUser(client.fetchUserFromToken())
    }
    const logoutUser = ()=> {
        window.localStorage.removeItem('lifetracker_token')
        location.reload()
    }

    const authValue = {user, setUser, initialized, setInitialized, isProcessing, setIsProcessing, error, setError, loginUser, signupUser, fetchUserFromToken}

    //check if jwt token exists
    useEffect(() => {
        let currentToken = window.localStorage.getItem("lifetracker_token")
        if(currentToken) {
            client.setToken(currentToken)
            setIsProcessing(true)
            setError(null)
            try {
                setUser(client.fetchUserFromToken())
                setError(null)
            }catch(err){setError(err)}
            setInitialized(true)
            setIsProcessing(false)
        }
    }, [])

    
            //any children nested in the the Authcontext provider can get access to


    {
        return (
            <AuthContext.Provider value = {authValue} >
            <>{children}</>
            </AuthContext.Provider>
        )

    }

};
export const useAuthContext = ()=> {useContext(AuthContext)}







