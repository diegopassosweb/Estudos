
import { ChangeEvent, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {Theme} from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import * as C from "./styles"


const FormStep3 = () => {

    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(() => {
        if(state.name === "") {
            navigate("/");
        } else {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }
    },[]);

    const handleNextStep = () => {

        if(state.email !== "" && state.github !== "") {
        console.log(state)
        } else {
            alert("preencha os dados")
        }

    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

  return (
    <Theme>
        <C.Container>
            <p>Passo 3/3 </p>
            <h1>{state.name} Onde te achamos?</h1>
            <p>Dados</p>

            <hr />

            <label htmlFor="">
                Qual seu email?
                <input type="email" value={state.email}
                onChange={handleEmailChange} />
            </label>

            <label htmlFor="">
                Qual seu github?
                <input type="url" value={state.github}
                onChange={handleGitHubChange} />
            </label>

            <Link to="/step2" className="backButton">Voltar</Link>
            <button onClick={handleNextStep}>Finalizar</button>
        </C.Container>
    </Theme>
  )
};

export default FormStep3;
