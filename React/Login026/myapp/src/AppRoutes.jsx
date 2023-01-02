import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { AuthContext } from "./contexts/Auth";
import { useState } from "react";
import { AuthProvider } from "./contexts/Auth";
import { useContext } from "react";

export const AppRoutes = () => {

    const Private = ({children}) => {
        const {authenticated} = useContext(AuthContext);

        if(!authenticated) {
            return <Navigate to="/login" />
        }

        return children
    }
   
    return (
        <Router>
            <AuthProvider>
                 <Routes>
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/" element={<Private><HomePage /> </Private>} />
                </Routes>
            </AuthProvider>
           
        </Router>
    )
}