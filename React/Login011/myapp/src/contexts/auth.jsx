import { useEffect } from "react";
import { createContext, useState } from "react";
import {useNavigate} from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }
        setLoading(false);
    },[]);

    const login = (email, password) => {
        console.log("login auth", {email, password});

        const loggedUser = {
            id: "123",
            email,
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if(password === "secret") {
        setUser(loggedUser);
        navigate("/");
        }
    }

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    }

    return (
        
        <AuthContext.Provider value={{authenticated: !!user, user, loading, logout,login}}>
           {children}
        </AuthContext.Provider>
    
    )
}

