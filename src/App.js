import React from "react";
import { Link, Route } from "wouter";
import ListOfGifs from "./components/ListOfGifs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/gif/Britney">Gifs de Britney</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
