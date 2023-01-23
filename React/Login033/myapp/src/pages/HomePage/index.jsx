import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const HomePage = () => {
  const {authenticated, logout} = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  }
  return (
    <>
    <p>{String(authenticated)}</p>
    <h1>HomePage</h1>
    <button onClick={handleLogout}>Logout</button>
    </>
    
  )
};

export default HomePage;
