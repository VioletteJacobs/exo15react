
import './App.css';
import Article from "./components/Article"
import React, {useState} from "react"

function App() {
  const [tortue, setTortue] = useState([{titre:"Harry Potter",durée:"2h"},{titre:"Narnia",durée:"1h30"}, {titre:"les 1001 dalmatiens", durée: "1h39"}]);
  return (
    <div className="App">
      <Article durée={tortue}/>
    </div>
  );
}

export default App;
