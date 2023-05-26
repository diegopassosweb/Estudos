// Guarda uma variavel como o useState mas quando é atualizado o componente nao é renderizado novamente

import React, { useEffect, useRef, useState } from 'react'

const HookuseRef = () => {
    const [name, setName]= useState("");
    
 const renders = useRef(0);
 const inputRef = useRef();

 const focusInput = () => {
    inputRef.current.focus()
 }

 const previousName = useRef();

 useEffect(() => {
    renders.current = renders.current + 1;
 })

 useEffect(() => {
   previousName.current = name;
 }, [name]);

  return (
    <div>
        <h1>useRef</h1>
        <p>O useRef é um gancho que permite criar diretamente uma referência ao elemento DOM no componente funcional. O useRef retorna um objeto ref mutável. Esse objeto tem uma propriedade chamada .</p>
        <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
        <p>Hello! my name is {name}</p>
        <p>Renders: {renders.current}</p>
        <p>And my name was {previousName.current}</p>
        <button onClick={focusInput}>Focus input</button>
        
    </div>
  )
}

export default HookuseRef