import React from "react"
import { createContext, useEffect, useState, useContext } from "react"

import apiClient  from "../services/apiClient"

const PAGE_URL = "http://localhost:3000"
const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    let client = new apiClient()
    //define necessary states
    const [refresh, setRefresh] = useState(false)
    const [user, setUser] = useState(null)
    const [initialized, setInitialized] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [error, setError] = useState(null)
    let currentUser = null

    const fetchUserFromToken = async  ()=> {
        return await client.fetchUserFromToken()
    }

    const loginUser = async (user)=> {
       currentUser = await client.login(user)
        return currentUser
    }
    const signupUser = async (user)=> {
      return await client.signup(user)
    }
    
    const logoutUser = async()=> {
        client.logout()
    }

    useEffect(async () => {
        console.log("USE EFFECT HAS BEEN CALLED")
        let currentToken = window.localStorage.getItem("lifetracker_token")
        console.log("currentToken in auth context useEffect", currentToken)
        if(currentToken) {
            client.setToken(currentToken)
            setIsProcessing(true)
            setError(null)
            try {
                setUser(await fetchUserFromToken())

                setError(null)
            }catch(err){
                setError(err)
            }
            setInitialized(true)
            setIsProcessing(false)
        }
    },[refresh])


    

    const authValue = {user, setUser, initialized, setInitialized, isProcessing, setIsProcessing, error, setError, loginUser, signupUser, fetchUserFromToken, logoutUser, refresh, setRefresh}

    //check if jwt token exists
   
            //any children nested in the the Authcontext provider can get access to
    {
        return (
            <AuthContext.Provider value = {authValue} >
            <>{children}</>
            </AuthContext.Provider>
        )

    }

}
export const useAuthContext = () => {return useContext(AuthContext)}






