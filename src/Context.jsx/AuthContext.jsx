import { createContext } from "react";
import { useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ( {children} ) => {

    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState("");

    const toggleAuth = () => {
        console.log("Toggle Auth");
        setIsAuth( !isAuth );
    }

    return (
        <AuthContext.Provider value={{isAuth, toggleAuth, setToken, token}}>
            { children }
        </AuthContext.Provider>
    )
}