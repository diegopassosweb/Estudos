import { useEffect, useState } from "react";
import * as C from "./App.styles";
import InfoArea from "./components/InfoArea";
import TableArea from "./components/TableArea";
import { Categories } from "./data/Categories";
import { items } from "./data/items";
import { FilteredListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { Item } from "./types/Item";

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(FilteredListByMonth(list, currentMonth));
  },[list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;
    for(let i in filteredList) {
      if(Categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
      setIncome(incomeCount);
      setExpense(expenseCount);
    }
  },[filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
      <InfoArea currentMonth={currentMonth}
      onMonthChange={handleMonthChange}
      income={income}
      expense={expense}
      />

      <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  )
}

export default App;