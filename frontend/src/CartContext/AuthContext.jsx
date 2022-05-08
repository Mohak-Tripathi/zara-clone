import { createContext, useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{

    const [Auth,setAuth]=useState(false);
    return <AuthContext.Provider value={{Auth, setAuth}}>{children}</AuthContext.Provider>
}