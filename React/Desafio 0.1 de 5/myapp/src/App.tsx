
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";


const App = () => {
  
  const [name, setName] = useState("User");
  const [age, setAge] = useState(90);
  const [bg, setBg] = useState("#ff0000");

  const [list, setList] = useState([
    "First text",
    "Second text",
    "Third text"
  ])

  const handle20 = () => {
    setAge(20)
    setBg("#00ff00");
  }

  const handle90 = () => {
    setAge(90);
    setBg("#ff0000");
  }

  return (
    <div style={{backgroundColor: bg}}>
      Hello {name} ! congrutulations for yours {age} years!
      <Header name={name} age={age} />

      {age === 90 && 
      <button onClick={handle20}>Im 20 years</button>
      }

      {age === 20 &&
      <button onClick={handle90}>Im 90 years</button>
      }
      
      <hr />

      <ul>
        {list.map((item,index) =>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    
      <Footer />
    </div>
  )
};

export default App;
