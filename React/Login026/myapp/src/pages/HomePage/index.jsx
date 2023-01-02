

import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";

const HomePage = () => {

  const {authenticated, logout} = useContext(AuthContext);

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
