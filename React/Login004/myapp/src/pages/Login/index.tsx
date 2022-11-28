import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext";
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
       if (email && password) {
        const isLogged = await auth.signin(email, password);
        if(isLogged) {
            navigate("/");
        } else {
            alert("erro");
        }
       }
    }

    return (
        <div>
            <h2>Pagina fechada</h2>

            <input type="text" value={email} placeholder="Digite seu email" 
            onChange={e => setEmail(e.target.value)} />

            <input type="password" value={password} placeholder="Digite sua senha" 
            onChange={e => setPassword(e.target.value)} />

        <button onClick={handleLogin}>Logar</button>
        </div>
    )
}