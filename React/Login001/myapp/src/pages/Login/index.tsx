import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate()
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleLogin = async () => {
        if(email && password) {
            const isLogged = await auth.signin(email, password);
            if(isLogged) {
                navigate("/")
            } else {
                alert("Erro!");
            }
        }
    }
    return (
        <div>
            <h2>Pagina Fechada</h2>
            <input type="text" value={email} placeholder="Digite seu email" 
            onChange={e => setemail(e.target.value)} />

            <input type="password" value={password} placeholder="Digite sua senha" 
            onChange={e => setpassword(e.target.value)} />

            <button onClick={handleLogin}>Logar</button>
        </div>
    )
}