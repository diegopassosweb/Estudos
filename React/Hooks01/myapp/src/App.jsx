import "./App.css"
import { useState, useEffect, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0)
  const [resourceType, setresourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  const renders = useRef();

  useEffect(() => {
    renders.current = name;
  }, [name]);

  useEffect(() => {
    const fetchResourceType = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      )
      const responseJSON = await response.json();

      //setItems(responseJSON);
    }
    fetchResourceType();
  }, [resourceType]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //   .then((Response) => Response.json())
  //   .then((json) => console.log(json));
  // }, [resourceType]);

  useEffect(() => {
    console.log("componentDidMount");

    return () => {
      console.log("componentWillUnmount");
    }
  }, [])

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  }

  const changeresourceType = (resourceType) => {
    setresourceType(resourceType)
  };


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>

      <h1>{resourceType}</h1>
      <div>
        <button onClick={() => changeresourceType("posts")}>Posts</button>
        <button onClick={() => changeresourceType("comments")}>Comments</button>
        <button onClick={() => changeresourceType("todos")}>Todos</button>
      </div>
      {items.map((item, key) => (
        <p key={key}>{item.id}</p>
      ))}

      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Hello! My name is {name}</p>
        <p>and my name was {renders.current}</p>
      </div>
    </div>
  );
};

export default App;