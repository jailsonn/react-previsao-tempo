import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import WeatherInformations from "./components/WeatherInformations/WeatherInformations";

function App() {
  // para colocar na tela usa-se um stado (useState)
  const [weather, setWeather] = useState();
  // O useRef é para referir ou pegar o valor digitado no input
  const inputRef = useRef();

  // função principal (promiss)
  async function searchCity() {
    const city = inputRef.current.value;
    const key = "cebcd482eda57fa9a6714c1c2ba91885";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`;

    // console.log(inputRef.current.value);

    const apiData = await axios.get(url);
    // só quero o data
    setWeather(apiData.data);
    // console.log(apiData)

  }

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da Cidade" />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather}/>}
    </div>
  );
}

export default App;
