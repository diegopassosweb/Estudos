
import { useNavigate } from "react-router-dom";
import Theme from "../../components/Theme";
import * as C from "./styles"


const FormStep1 = () => {
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate("/step2");

    }

  return (
    <Theme>
        <C.Container>
            <p>Passo 1/3</p>
            <h1>Vamos começar com seu nome</h1>
            <p>Preencha o campo abaixo</p>

            <hr />

            <label htmlFor="">
                Seu nome completo
                <input type="text" autoFocus />
            </label>

            <button onClick={handleNextStep}>Proximo</button>
        </C.Container>
    </Theme>
  )
};

export default FormStep1;
