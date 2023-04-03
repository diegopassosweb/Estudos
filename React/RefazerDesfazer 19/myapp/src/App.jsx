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
    setList((prev) => [...prev, newDot]);
    setUndid([]);
  } 

  const handleUndo = (e) => {
   e.stopPropagation();

    if(list.length === 0) {
      return;
    }
    const lasItem = list[list.length -1];
    setUndid((prev) => [...prev, lasItem]);
    
    setList((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    })
    
  }

  const handleRedo = (e) => {
    e.stopPropagation();

    if(undid.length === 0) {
      return;
    }

    const recoveredDot = undid[undid.length -1];
    setList((prev) => [...prev, recoveredDot]);

    setUndid((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    })

  }

  return (
    <div id="page" onClick={handleClick}>
      <button disabled={list.length === 0} onClick={handleUndo}>Desfazer</button>
      <button disabled={undid.length === 0}  onClick={handleRedo}>Refazer</button>
      {list.map((item) => (
        <span className='dot' style={{left: item.clientX, top: item.clientY}}/>
      ))}
    </div>
  )
}

export default App
