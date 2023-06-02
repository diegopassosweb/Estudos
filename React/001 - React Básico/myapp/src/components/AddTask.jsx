
import React, { useState } from 'react'
import "./AddTask.css";
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputData(e.target.value)
  }

  const handleTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData("");
  }
  return (
    <div className='add-task-container'>

      <input 
       type='text'
       className='add-task-input' 
       value={inputData}
       onChange={handleInputChange} />
      <div className="add-task-button-container">
        <Button onClick={handleTaskClick}>Adicionar</Button>
      </div>
      
    </div>
    
  )
}

export default AddTask