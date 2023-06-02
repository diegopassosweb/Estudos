
import "./App.css"
import HookuseEffect from "./Hook/HookuseEffect"
import HookuseReducer from "./Hook/HookuseReducer"
import HookuseRef from "./Hook/HookuseRef"
import HookuseState from "./Hook/HookuseState"

const App = () => {
  return (
    <div>
      <HookuseState />
      <HookuseEffect />
      <HookuseRef />
      <HookuseReducer />
      
    </div>
  
  )
}

export default App