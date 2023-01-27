import React, { useEffect, useState } from 'react';
import * as C from "./App.styles";
import './App.css';
import { Item } from './types/Item';
import { items } from './data/items';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { filteredListByMonth, getCurrentMonth } from './helpers/dateFilter';
import TableArea from './components/TableArea';
import InfoArea from './components/InfoArea';

function App() {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredlist, setFilteredList] = useState<Item[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filteredListByMonth(list, currentMonth));
  },[list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredlist) {
      if(categories[filteredlist[i].category].expense) {
        expenseCount += filteredlist[i].value;
      } else {
        incomeCount += filteredlist[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredlist])

  return (
   <C.Container>
    <C.Header>
      <C.HeaderText>Sistema Financeiro</C.HeaderText>
    </C.Header>
    <C.Body>

     <InfoArea 
      income={income}
      expense={expense}
      onMonthChange={handleMonthChange}
      currentMonth={currentMonth} /> 

    <TableArea list={filteredlist} />
    </C.Body>
   </C.Container>
  );
}

export default App;
