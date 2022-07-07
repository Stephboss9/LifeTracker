import { Children, useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const ActivityContext = createContext()

export const ActivityContextProvider = ({children}) => {
    
    
    
    return (
        

    )
}

export const useActivityContext = ()=> (useContext(ActivityContext))