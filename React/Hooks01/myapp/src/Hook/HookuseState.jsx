// O useState, que permite a criação de estado no componente através de função
// e faz o gerenciamento do estado local do componente retorna um array como resultado. 
//Por isso, é possível fazermos uma desestruturação para receber partes desse retorno.

import { useState } from "react"

const HookuseState = () => {
    const [count, setCount] = useState(0);
    
    const incrementCount = () => {
        setCount((prevState) => prevState + 1);
    };

  return (
    <div>
        <h1>useState</h1>
        <p> O useState, que permite a criação de estado no componente através de função
        e faz o gerenciamento do estado local do componente retorna um array como resultado. 
        Por isso, é possível fazermos uma desestruturação para receber partes desse retorno.</p>
        <h1>{count}</h1>
        <button onClick={incrementCount}>Increment</button>
        
    </div>
  )
}

export default HookuseState