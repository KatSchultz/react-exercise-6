import { fetchAllQuotes } from "./services/quotes.services";
import "./App.css";
import { useEffect, useState } from "react";
import { Quote } from "./types";

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => getAllQuotes(), []);

  function getAllQuotes() {
    fetchAllQuotes().then((response) => setQuotes(response.data));
  }

  return (
    <div className="App">
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
