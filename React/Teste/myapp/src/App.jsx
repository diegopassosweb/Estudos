import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [list, setList] = useState([]);
  const [undid, setUndid] = useState([]);

  const handleClick = (event) => {
    console.log(event);

    const newdot = {
      clientX: event.clientX,
      clientY: event.clientY,
    }

    console.log(newdot);
    setList((prev) => [...prev, newdot]);
    setUndid([]);
  }

  const handleUndo = (event) => {
    event.stopPropagation();
    console.log("undo");

    if(list.length === 0) {
      return;
    }

    const lastItem = list[list.length - 1];
    setUndid((prev) => [...prev, lastItem]);

    setList((prev) => {
      const newArr = [...prev].slice(0,-1);
      return newArr;
    })
  }

  const handleRedo = (event) => {
    event.stopPropagation();
    console.log("redo");

    if(undid.length === 0) {
      return;
    }

    const recoveredDot = undid[undid.length -1];
    setUndid((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    });
    setList((prev) => [...prev, recoveredDot]);
  }

  return (
    <div id="page" onClick={handleClick}>
      <button onClick={handleUndo}>Desfazer</button>
      <button onClick={handleRedo}>Refazer</button>
      {list.map(item => (
      <span
      key={item.clientX}
       className="dot" style={{left: item.clientX, top: item.clientY}} />
      ))}
     
    </div>
  )
}

export default App