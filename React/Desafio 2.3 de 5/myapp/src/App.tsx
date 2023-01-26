import React, { useEffect, useState } from 'react';
import * as C from "./App.styles";
import './App.css';
import { Item } from './types/Item';
import { items } from './data/items';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { filteredListByMonth, getCurrentMonth } from './helpers/dateFilter';
import TableArea from './components/TableArea';

function App() {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredlist, setFilteredList] = useState<Item[]>([]);

  useEffect(() => {
    setFilteredList(filteredListByMonth(list, currentMonth));
  },[list, currentMonth]);

  return (
   <C.Container>
    <C.Header>
      <C.HeaderText>Sistema Financeiro</C.HeaderText>
    </C.Header>
    <C.Body>

    <TableArea list={filteredlist} />
    </C.Body>
   </C.Container>
  );
}

export default App;
