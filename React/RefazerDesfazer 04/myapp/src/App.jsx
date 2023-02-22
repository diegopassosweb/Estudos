import { useState } from 'react'

import './App.css'

function App() {
  const [list, setList] = useState([]);
  const [undid, setUndid] = useState([]);

  const handleCLick = (e) => {
    
    const newDot = {
      clientX: e.clientX,
      clientY: e.clientY,
    }
    console.log(newDot)
    setList((prev) => [...prev, newDot]);
  }

  const handleUndo = (e) => {
    e.stopPropagation();
    console.log("undo");

    const lasItem = list[list.length -1];
    setUndid((prev) => [...prev, lasItem]);

    setList((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    })
  }

   const handleRendo = (e) => {
    e.stopPropagation();
    console.log("redo");

    const recoveredDot = undid[undid.length -1];
    setList((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    });
    setList((prev) => [...prev, recoveredDot]);
   }

  return (
    <div className="page" onClick={handleCLick}>
      <button disabled={list.length === 0} onClick={handleUndo}>Desfazer</button>
      <button disabled={undid.length === 0} onClick={handleRendo}>Refazer</button>
      {list.map((item,index) => (
        <span className="dot" key={index} style={{left: item.clientX, top: item.clientY }}></span>
      ))}
       
    </div>
  )
}

export default App
