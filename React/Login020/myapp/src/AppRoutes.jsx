
import React from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { AuthContext, AuthProvider } from "./contexts/auth.";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { useContext } from "react";

const AppRoutes = () => {
    const Private = ({children}) => {
        const {authenticated} = useContext(AuthContext);

        if(!authenticated) {
            return <Navigate to="/login" />
        }
    }
  return (
    <Router>
       <AuthProvider>
        <Routes>
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/" element={<Private><HomePage /></Private>} />
        </Routes>
       </AuthProvider>
    </Router>
  )
};

export default AppRoutes;
