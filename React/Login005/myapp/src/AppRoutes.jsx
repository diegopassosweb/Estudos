import { useContext } from "react";
import { useState } from "react";
import {
  BrowserRouter as Routers,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthContext, AuthProvider } from "./contexts/auth";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const AppRoutes = () => {
    const Private = ({children}) => {
        const {authenticated, loading} = useContext(AuthContext);

        if(loading) {
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated) {
            return <Navigate to={"/login"} />;
        }
        return children;
    }
   
  return (
    <Routers>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/" element={<Private><HomePage /></Private>} />
        </Routes>
      </AuthProvider>
    </Routers>
  );
};

export default AppRoutes;
