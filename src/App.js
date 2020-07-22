import React from "react";
import ListOfGifs from "./components/ListOfGifs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword="panda" />
      </section>
    </div>
  );
}

export default App;
