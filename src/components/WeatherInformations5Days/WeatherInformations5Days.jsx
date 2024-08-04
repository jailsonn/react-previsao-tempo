/* eslint-disable react/prop-types */
import "./WeatherInformations5Days.css";

function WeatherInformations5Days({ weather5Days }) {
  console.log(weather5Days);

  let dailyForecast = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString()

    console.log(date);
  }

  return (
    <div>
      <p>5 days</p>
    </div>
  );
}

export default WeatherInformations5Days;
