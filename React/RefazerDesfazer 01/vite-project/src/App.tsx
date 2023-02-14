import React, { useState } from 'react'
import './App.css'

interface ClickedProps {
  clientX: number
  clientY: number
}

function App() {
  const [clickedPoints, setClickedPoints] = useState<ClickedProps[]>([])
  const [undoPoints, setUndoPoints] = useState<ClickedProps[]>([])

 
  function getCordenates(e: React.MouseEvent<HTMLElement>) {
    const { clientX, clientY } = e

    setClickedPoints([...clickedPoints, { clientX, clientY }])
  }

  function handleUndo() {
    const newClickedPoints = [...clickedPoints]
    const undoPoint = newClickedPoints.pop()
    setClickedPoints(newClickedPoints)
    if(!undoPoint) return
    setUndoPoints([...undoPoints, undoPoint])
  }

  function handleRendo() {
    const newUndoPoints = [...undoPoints];
    const redoPoint = newUndoPoints.pop()
    if (!redoPoint) return
    setUndoPoints(newUndoPoints)
    setClickedPoints([...clickedPoints, redoPoint ])
  }

  return ( 
  <>
  <button disabled={clickedPoints.length === 0} onClick={handleUndo}>Undo</button>
  <button onClick={handleRendo}>Redo</button>

   <div className="App" onClick={getCordenates}>
    {clickedPoints.map((clickedPoint,index) => {
      return <div key={index} style={{left:clickedPoint.clientX - 6, top: clickedPoint.clientY - 7, 
        position: "absolute",
        borderRadius: "50%",
        background: "red",
        width:"10px",
        height: "10px",
      }}

        >0</div>
    })}
  </div>
  </>
 
  )
}

export default App
