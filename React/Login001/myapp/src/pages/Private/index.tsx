import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

export const Private = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <h2>Pagina Privada</h2>

            Ola {auth.user?.name}, tudo bem?
        </div>
        
    );
}