
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

const HomePage = () => {
  const {logout, authenticated} = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }
  return (
    <>

    <h1>HomePage</h1>
    <p>{String(authenticated)}</p>
    <button onClick={handleLogout}>Logout</button>
    </>
  )
};

export default HomePage;
