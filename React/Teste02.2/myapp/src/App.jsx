
import React, { useEffect, useState } from 'react'
import "./App.scss"

const Comb = [
  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6]
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6],
]

function App () {
  const [gameData, setGameData] = useState([0,0,0,0,0,0,0,0,0]);
  const [turn, setTurn] = useState(1);
  const [winning, setWinning] = useState(null);

  const handleClick = (clickIndex) => {
    console.log(clickIndex);

    if(gameData[clickIndex] !== 0) {
      return;
    }
    if(winning) {
      return;
    }

    setGameData((prev) => {
      const newGameData = [...prev];
      newGameData[clickIndex] = turn;

      return newGameData;
    });

    setTurn((prev) => prev === 1 ? 2 : 1);
  };

  useEffect(() => {
    checkWinner();
  },[gameData])

  useEffect(() => {
    if(winning) {
      alert("ja teve um vencedor")
    }
  }, [winning]);
  
    const checkWinner = () => {
    let winner = null;

    for(let values of Comb) {
      console.log(values[0]);

      if(
        gameData[values[0]] === 1 && 
        gameData[values[1]] === 1 &&
        gameData[values[2]] === 1 
          ) {
            winner = "player1"
      }

      if(
        gameData[values[0]] === 2 && 
        gameData[values[1]] === 2 &&
        gameData[values[2]] === 2 
          ) {
            winner = "player2"
      }
      if(winner) {
        setWinning(values);
        break;
      }
    }

    console.log({winner});
  }

  return (
    <>
    <div className="board-game">
      {gameData.map((value,index) => (
        <span onClick={() => {
          handleClick(index)
    
        }} key={index}>
          <abbr title=''>{index}</abbr>
          {value === 1 && "X"}
          {value === 2 && "O"}
          </span>
      ))}
    
    </div>
    </>
  )
}

export default App