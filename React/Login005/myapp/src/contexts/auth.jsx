
import React, {createContext} from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
       const recoveredUser = localStorage.getItem("user");

       if(recoveredUser) {
        setuser(JSON.parse(recoveredUser));
       }
       setloading(false);
    },[]);

    const login = (email, password) => {
        console.log("login auth", {email, password});

        const loggedUser = {
            id: "123",
            email,
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if(password === "secret") {
        setuser(loggedUser);
        navigate("/");
        }
    }

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        setuser(null);
        navigate("/login");
    }

    return (
    <AuthContext.Provider value={{authenticated: !!user, user, login, logout,loading}}>
        {children}
    </AuthContext.Provider>
    )
}