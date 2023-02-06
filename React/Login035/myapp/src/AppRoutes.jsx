
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "./contexts/Auth";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

export const AppRoutes = () => {
   
    return (
        <Router>
            <AuthProvider>
                <Routes>
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/" element={<HomePage />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}