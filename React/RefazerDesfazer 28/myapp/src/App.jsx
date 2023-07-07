import { useState } from 'react'

import './App.css'

function App() {
  const [list, setList] = useState([])
  const [undid, setUndid] = useState([])

  const handleClick = (e) => {
    const newDot = {
      clientX: e.clientX,
      clientY: e.clientY
    }
    //console.log(e)
    setList((prev) => [...prev, newDot])
    console.log(newDot)
    setUndid([])
  }

  const handleUndo = (e) => {
    e.stopPropagation()

    if (list.length === 0) {
      return
    }

    const lastDot = list[list.length -1];
    setUndid((prev) => [...prev, lastDot])


    setList((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    })
  }

  const handleRedo = (e) => {
    e.stopPropagation()

    if(undid.length === 0) {
      return
    }

    const recoverDot = undid[undid.length -1]
    
    setUndid((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr
    })
    
    setList((prev) => [...prev, recoverDot])
  }

  return (
   <div id='page' onClick={handleClick}>
    <button onClick={handleUndo}>Desfazer</button>
    <button onClick={handleRedo}>Refazer</button>
    {list.map((item, index) => (
      <span className="dot" key={index} style={{left: item.clientX, top: item.clientY}} />
    ))}
    
   </div>
  )
}

export default App
