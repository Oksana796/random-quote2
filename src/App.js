import React, { useState, useEffect } from "react";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("grey");

  const getQuote = () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const allQuotes = data.quotes;
        const randomQuoteNumber = Math.floor(Math.random() * allQuotes.length);
        const randomQuote = allQuotes[randomQuoteNumber];
        console.log(randomQuote);

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
      .catch((err) => console.error("Sorry"));
  };

  return (
    <>
      <div className="App">
        <div className="quote">
          <div className="text">
            <FaQuoteLeft style={{
              display: "inline-block",
              verticalAlign: "top",
              fontSize: "1em",
              marginRight: "0.4em",
            }}/>
            <span className="cit">{quote}</span>
          </div>
          <div className="author">- {author}</div>
        </div>

        <div className="buttons">
          <a
            className="button"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/intent/tweet?text=Hello%20world&hashtags=proudOf via @me"
            title="Tweet this quote!"
          >
            <FaTwitter style={{
              float: "left",
              width:"40px",
              height: "38px",
              backgroundColor:"black",
              color: "white",
              padding: "6px 0",
              borderRadius:"3px",
              
            }}/>
          </a>

          <button className="button"
          style={{
            float: "right",
          }}
           onClick={() => getQuote()}>
            New Quote
          </button>
        </div>
      </div>
      <footer>
        by 
        <a href="https://github.com/Oksana796" target="_blank" rel="noreferrer">
           Oksana
        </a>
      </footer>
    </>
  );
}

export default App;
