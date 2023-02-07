import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="text"></div>
        <div className="buttons">
          <a
            class="twitter-share-button"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/intent/tweet?text=Hello%20world&hashtags=proudOf via @me"
            data-size="large"
          >
            Tweet
          </a>
        </div>
      </div>
      <footer></footer>
    </>
  );
}

export default App;
