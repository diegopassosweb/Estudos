import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import { Header } from './components/Header';

function App() {

 
  const [name, setName] = useState("Usuario");
  const [age, setAge] = useState(90);
 const [bg, setbg] = useState("#FF0000");

 const [list, setList] = useState([
    "Primeiro texto",
    "Segundo texo",
    "Terceiro texto",
 ])
 
 const handle20 = () => {
  setAge(90);
  setbg("#00FF00");
 }

 const handle90 = () => {
  setAge(20);
  setbg("#FF0000");
 }

  return (

    <div style={{backgroundColor: bg}}>
      <Header name={name} age={age}/>

      {age === 90 &&
        <button onClick={handle90}>Tenho 90 anos</button>
      }

      {age === 20 &&
        <button onClick={handle20}>Tenho 20 anos</button>
      }
     
     <hr />

     <ul>
      {list.map((item, index) =>(
        <li key={index}>{item}</li>
      ))}
     </ul>
      <Footer />
    </div>
  );
}

export default App;
