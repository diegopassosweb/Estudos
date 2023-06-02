import { useReducer } from "react"

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {
                counter: state.counter + 1,
            };
        case 'decrement':
            return {
                counter: state.counter - 1
            };
            default:
                return state;
    }
};

const HookuseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0});


  return (
    <div>
        <h1>useReducer</h1>
        <p>useReducer. É uma alternativa para mantermos nosso estado quando o mesmo é mais complexo. Se você conhece a sintaxe do redux, a mesma é utilizada no useReducer. Algo que deve ser mencionado é que aqui não temos a propagação do estado por toda a aplicação como o redux proporciona.</p>
        <p>{state.counter}</p>
        <button onClick={() => dispatch({ type: "increment"})}>Increment</button>
        <button onClick={() => dispatch({ type: "decrement"})}>Decrement</button>
    </div>
  )
}

export default HookuseReducer