
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";

const HomePage = () => {
  const {logout, authenticated } = useContext(AuthContext);
  const handleLogo = () => {
    logout();
  }
  return (
    <>
    <p>{String(authenticated)}</p>
    <h1>HomePage</h1>
    <button onClick={handleLogo}>Sair</button>
    </>
  )
};

export default HomePage;
