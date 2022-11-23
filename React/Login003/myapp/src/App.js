
import React from "react";
import { AuthProvider } from "./context/auth";
import RoutesApp from "./routes";
import GlobalStyle from "./styles/globa";


const App = () => {
  return (
    <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
    </AuthProvider>
  )
};

export default App;
