import React from "react";
import { Link, Route } from "wouter";
import ListOfGifs from "./components/ListOfGifs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/gif/Britney">Gifs de Britney</Link>
        <Link to="/gif/Kanye">Gifs de Kanye</Link>
        <Link to="/gif/Pandas">Gifs de Pandas</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
