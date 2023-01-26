import React, { useState } from 'react';
import * as C from "./App.styles";

import './App.css';
import { Item } from './types/Item';
import ListItem from './components/ListItem';
import AddArea from './components/AddArea';

function App() {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: "Comprar pao na padaria", done: false},
    {id: 2, name: "Comprar bolo na padaria", done: true},
  ]);
  
  const handleAddTASK = (TaskName: string) => {
    let newlist = [...list];
    newlist.push({
      id: list.length +1,
      name: TaskName,
      done: false,
    })
    setList(newlist);
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTASK} />

      {list.map((item,index) => (
       <ListItem key={index} item={item} />
      ))}

      </C.Area>
    </C.Container>
  );
}

export default App;
