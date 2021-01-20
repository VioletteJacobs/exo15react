
import './App.css';
import Article from "./components/Article"
import React, {useState} from "react"

function App() {
  const [titre, setTitre] = useState([{titre:"Harry Potter"},{titre:"Narnia"}, {titre:"les 1001 dalmatiens"}]);
  return (
    <div className="App">
      <Article titre={titre}/>
    </div>
  );
}

export default App;
