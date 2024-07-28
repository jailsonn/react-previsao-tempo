import { useState, useRef } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef()

  // função principal
  function searchCity() {
    const city = inputRef.current.value
    let key = "cebcd482eda57fa9a6714c1c2ba91885";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`

    // console.log(inputRef.current.value);

    const data = axios.get(url)
    console.log(data);
    
  }

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da Cidade" />
      <button onClick={searchCity}>Buscar</button>
    </div>
  );
}

export default App;
