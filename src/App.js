import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="text">
          <div className="quote">
            <FaQuoteLeft />
          </div>
          <div className="author">-</div>
        </div>

        <div className="buttons">
          <a
            className="button"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/intent/tweet?text=Hello%20world&hashtags=proudOf via @me"
            title="Tweet this quote!"
          >
            <FaTwitter />
          </a>
          <button className="button">New Quote</button>
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
