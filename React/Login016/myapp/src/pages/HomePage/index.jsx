
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const HomePage = () => {
  const {logout, authenticated} = useContext(AuthContext);

  const handleLogout = () => {
    logout()
  }
  return <div>
    <h2>HomePage</h2>
    <p>{String(authenticated)}</p>
    <button onClick={handleLogout}>Logout</button>
  </div>;
};

export default HomePage;
