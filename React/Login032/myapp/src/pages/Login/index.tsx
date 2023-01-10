
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";


const Login = () => {
    const auth = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLogin = async () => {
        if(email && password) {
            const IsLogged = await auth.signin(email, password);
            if(IsLogged) {
                navigate("/");
            } else {
                alert("erro")
            }
        }
    }

  return (
    <div>
        <h2>Pagina Fechada</h2>

        <input type="text" value={email} placeholder="Digite seu email"
        onChange={e => setEmail(e.target.value)} />
        <input type="password" value={password} placeholder="Digite sua senha"
        onChange={e => setPassword(e.target.value)} />

        <button onClick={handleLogin}>Logar</button>
    </div>
  )
};


export default Login;
