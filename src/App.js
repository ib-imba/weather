import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="quito, ec" />
      <WeatherEngine location="turin, it" />
      <footer>
        <a href="https://bit.ly/2Srvh0b" target="_blank">
          <img
            src="./images/download_w.png"
            alt="logo"
            width="24"
            height="24"
          />
          <div>see project</div>
        </a>
      </footer>
    </div>
  );
}

export default App;
