
import './App.css';
import Article from './components/Article';
import Welcome from './components/Welcome';


function App() {
  const name = 'Zach Latta'

  return (
    <div className="App">
     <h1>Welcome! {name}</h1>
     <Welcome name="Zach Latta" />
     <Article title="Hello Hack Club!" author={['lachlanjc', 'zachlatta']} />
    </div>
  );
}

export default App;
