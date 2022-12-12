import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import { AuthContext, AuthProvider } from "./contexts/auth";
import { useContext } from "react";

export const AppRoutes = () => {

    const Private = ({children}) => {
        const {authenticated, loading} = useContext(AuthContext);

        if(loading) {
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated) {
            return <Navigate to="login" />
        }

        return children;
    }

    return (
        <Router>
            <AuthProvider>
                 <Routes>
                <Route exact path="/login" element={<LoginPage/>} />
                <Route exact path="/" element={<Private><HomePage /> </Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}