
import React, { useState } from 'react'
import "./App.css";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {v4 as uuidv4} from "uuid";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },

    {
      id: "2",
      title: "Ler livros",
      completed: true,
    },

  ]);

  const handleTaskClick = (taskId) => {
      const newTasks = tasks.map((task) => {
        if (task.id === taskId) return { ...task, completed: !task.completed}

        return task;
  })
  setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTask);
  }
// State
// State é uma vaverial que guarda um valor
// Quando o valor é atualizado, ele é renderizado novamente

// Props
// Props são dados que se passa de componente pai para filho
  return (
    <div>
      <div className='container'>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
      </div>
    </div>
   
  )
}

export default App