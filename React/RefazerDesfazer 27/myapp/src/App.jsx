
import React, { useState } from 'react'
import "./App.css";

const App = () => {

  const [list, setList] = useState([]);
  const [undid, setUndid] = useState([]);

  const handleCLick = (e) => {

    const newDot = {
      clientX: e.clientX,
      clientY: e.clientY
    }
    console.log(newDot)
    setList((prev) => [...prev, newDot]);
    setUndid([])
  }

  const handleUndo = (e) => {
    e.stopPropagation();

    if (list.length === 0) {
      return
    }

    const lastItem = list[list.length -1];
    setUndid((prev) => [...prev, lastItem])

    setList((prev) => {
      const newArr = [...prev].slice(0, -1)
      return newArr;
    })
  }

  const handleRedo = (e) => {
    e.stopPropagation();

    if (undid.length === 0) {
      return
    }

    const recoveredDot = undid[undid.length -1];
    setList((prev) => [...prev, recoveredDot]);

    setUndid((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    })

  }


  return (
    <div className='App'>
      <div id="page" onClick={handleCLick}>
        <button onClick={handleUndo}>Desfazer</button>
        <button onClick={handleRedo}>Refazer</button>
        {list.map((item, index) => (
          <span className="dot" key={index} style={{left: item.clientX, top: item.clientY}}/>
        ))}
      </div>
    </div>
  )
}

export default App