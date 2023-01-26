
import { ChangeEvent, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import SelectOption from "../../components/SelectOption";
import {Theme} from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import * as C from "./styles"


const FormStep2 = () => {

    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(() => {
        if(state.name === "") {
            navigate("/");
        } else {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
    }
    },[]);

    const handleNextStep = () => {
        if(state.name !== "") {
            navigate("/step3");
        } else {
            alert("preencha os dados")
        }
        
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

   

  return (
    <Theme>
        <C.Container>
            <p>Passo 2/3 </p>
            <h1> {state.name} Se descreva</h1>
            <p>qual seu estado atual?</p>

            <hr />

            <SelectOption
                title="Sou iniciante"
                description="novato"
                icon={"?"}
                selected={state.level === 0}
                onClick={() => setLevel(0)}
            />

            <SelectOption
                title="Sou programador"
                description="intermediario"
                icon={"?"}
                selected={state.level === 1}
                onClick={() => setLevel(1)}
            />

            <Link to="/" className="backButton">Voltar</Link>
            <button onClick={handleNextStep}>Proximo</button>
        </C.Container>
    </Theme>
  )
};

export default FormStep2;
