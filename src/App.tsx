import { fetchAllQuotes } from "./services/quotes.services";
import "./App.css";
import { useEffect, useState } from "react";
import { Periods, Quote } from "./types";
import fetchWeather from "./services/weather.services";
import { Http2ServerRequest } from "http2";

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [weather, setWeather] = useState<Periods[]>([]);

  useEffect(() => getAllQuotes(), []);
  useEffect(() => getWeather(), []);

  function getAllQuotes() {
    fetchAllQuotes().then((response) => setQuotes(response.data));
  }

  function getWeather() {
    fetchWeather().then((response) =>
      setWeather(response.data.properties.periods)
    );
  }

  return (
    <div className="App">
      <div>
        <h2>Weather Forecast</h2>
        {weather.map((data) => (
          <div>
            <h3>{data.name}</h3>
            <p>
              Temperature: {data.temperature} {data.temperatureUnit}
            </p>
            <img src={data.icon} alt="" />
            <p>{data.detailedForecast}</p>
          </div>
        ))}
      </div>
      <button onClick={getAllQuotes}>Get Quotes</button>
      {quotes.map((quote, index) => (
        <ul key={index}>
          <li>
            <h3>{quote.author}</h3>
            <p>{quote.text}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;
