import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }
        setLoading(false);
    }, [])
    
    const login = (email, password) => {
        console.log("login", {email, password})

        const loggedUser = {
            id: "123",
            email,
        }

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if(password === "secret") {
            setUser(loggedUser);
            navigate("/");
        }
    }

    const logout = () => {
        console.log("logout");
        navigate("/login");
        localStorage.removeItem("user");
        setUser(null);

    }
    return (
        <AuthContext.Provider value={{authenticated: !!user, user, login, logout, loading}}>
            {children}
        </AuthContext.Provider>
    )
}