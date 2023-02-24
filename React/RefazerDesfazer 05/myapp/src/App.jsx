import { useState } from 'react'

import './App.css'

function App() {
  const [list, setList] = useState([]);
  const [undid, setUndid] = useState([]);

  const handleClick = (e) => {

    const newDot = {
      clientX: e.clientX,
      clientY: e.clientY
    }
    console.log(newDot);

    setList((prev) =>[...prev, newDot]);
  }

  const handleUndo = (e) => {
    e.stopPropagation();

    if(list.length === 0 ) {
      return;
    }

    const lastItem = list[list.length -1];
    setUndid((prev) => [...prev, lastItem]);

    setList((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    });
  }

  const handleRedo = (e) => {
    e.stopPropagation();

    if(undid.length === 0 ) {
      return;
    }
    
    const recoveredItem = undid[undid.length -1];

    setUndid((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    });
    setList((prev) => [...prev, recoveredItem]);
  }

  return (
    <div id="page" onClick={handleClick}>
      <button disabled={list.length === 0} onClick={handleUndo}>Desfazer</button>
      <button onClick={handleRedo}>Refazer</button>
      {list.map((item,index) => <span style={{left: item.clientX, top: item.clientY}} key={index} className="dot"></span>)}
       
    </div>
  )
}

export default App
