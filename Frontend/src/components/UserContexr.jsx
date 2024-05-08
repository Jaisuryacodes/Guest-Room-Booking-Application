import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext= createContext({});
export function UserContextProvider({children}){
    const [User,setUser]=useState(null);
    useEffect(()=>{
        if(!User){
        axios.get('/Profile')
        }
    },[])
    return(
        <UserContext.Provider value={{User,setUser}}>
            {children}
        </UserContext.Provider>
    )
}