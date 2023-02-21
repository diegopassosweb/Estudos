import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([]);
  const [undid, setUndid] = useState([]);

  const handleClick = (e) => {
    const newDot = {
      clientX: e.clientX,
      clientY: e.clientY,
    }
    console.log(newDot);
    setList((prev) =>[...prev, newDot]);
    setUndid([]);
  }

  const handleUndo = (e) => {
    e.stopPropagation();

    const lasItem = list[list.length -1];
    setUndid((prev) => [...prev, lasItem]);

    setList((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    })
  }

  const handleRedo = (e) => {
    e.stopPropagation();

    const recoveredDot = undid[undid.length -1];
    setUndid((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    })
    setList((prev) =>[...prev, recoveredDot]);
  }

  return (
    <div id="page" onClick={handleClick}>
      <button disabled={list.length === 0} onClick={handleUndo}>Undo</button>
      <button disabled={undid.length === 0} onClick={handleRedo}>Redo</button>

      {list.map((item,index) => (
        <span className="dot" key={index} style={{left: item.clientX, top: item.clientY}}></span>
      ))}
    
    </div>
  )
}

export default App
