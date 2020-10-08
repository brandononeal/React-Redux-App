import React from "react";
import Fact from "./Fact";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <img
        src="https://media1.tenor.com/images/6af63d02d8781833b77d65c0ec051c4d/tenor.gif?itemid=17974316"
        alt="cat-dancing"
        width="25%"
      />
      <Fact />
    </div>
  );
}

export default App;
