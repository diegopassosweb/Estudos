// useEffect se usa quando quer executar algo quando algo acontecer, mudar
import { useEffect, useState } from 'react'

const HookuseEffect = () => {
    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchResourceType = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/${resourceType}`
            )
            const responseJSON = await response.json();
            
            setItems(responseJSON)
        };
        //fetchResourceType();
    },[resourceType])

    useEffect(() => {
    console.log("componentDidMount");
    
    return () => {
        console.log("componentWillUnmount")
    }
    },[])

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //     .then((Response) => Response.json())
    //     .then((json) => console.log(json));
    // }, [resourceType]) 
    // sem uma lista será executado sempre que  o componente foratualizado

    const changeResourceType = (resourceType) => {
        setResourceType(resourceType);
    };

  return (
    <div>
    <h1>useEffect</h1>
    <p>O useEffect() recebe como primeiro parâmetro uma função que será executada assim que o componente renderizar. Então é um ótimo lugar para fazer requisições. Dessa maneira como escrevemos, a função passada ao useEffect() será executada sempre que o componente for atualizado.</p>
    <h1>{resourceType}</h1>
    <div>
        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("comments")}>Comments</button>
        <button onClick={() => changeResourceType("todos")}>Todos</button>
        
        {items.map((item,keys) => (
            <p key={keys}>{}</p>
        ))}
    </div>
    </div>
  )
}

export default HookuseEffect