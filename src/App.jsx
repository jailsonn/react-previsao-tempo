import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import WeatherInformations from "./components/WeatherInformations/WeatherInformations";
import WeatherInformations5Days from "./components/WeatherInformations5Days/WeatherInformations5Days"


function App() {
  // para colocar na tela usa-se um stado (useState)
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();
  // O useRef é para referir ou pegar o valor digitado no input
  const inputRef = useRef();

  // função principal (promiss)
  async function searchCity() {
    const city = inputRef.current.value;
    const key = "cebcd482eda57fa9a6714c1c2ba91885";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=pt_br`


    // console.log(inputRef.current.value);

    const apiData = await axios.get(url);
    const apiInfo5Days = await axios.get(url5Days)

    console.log(apiInfo5Days);
    

    // só quero o data
    setWeather(apiData.data);
    // console.log(apiData)
    setWeather5Days(apiInfo5Days.data)


  }

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da Cidade" />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather}/>}
      {weather5Days && <WeatherInformations5Days weather5Days={weather5Days} />}

    </div>
  );
}

export default App;
