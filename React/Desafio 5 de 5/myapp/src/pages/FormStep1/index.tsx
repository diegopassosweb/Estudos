
import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Theme} from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import * as C from "./styles"


const FormStep1 = () => {

    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    },[])

    const handleNextStep = () => {
        if(state.name !== "") {
            navigate("/step2");
        } else {
            alert("preencha os dados")
        }
        

    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

  return (
    <Theme>
        <C.Container>
            <p>Passo 1/3 </p>
            <h1>Vamos começar com seu nome</h1>
            <p>Preencha o campo abaixo</p>

            <hr />

            <label htmlFor="">
                Seu nome completo
                <input type="text" autoFocus value={state.name}
                onChange={handleNameChange} />
            </label>

            <button onClick={handleNextStep}>Proximo</button>
        </C.Container>
    </Theme>
  )
};

export default FormStep1;
