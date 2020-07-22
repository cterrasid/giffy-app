import React, { useState } from "react";
import ListOfGifs from "./components/ListOfGifs";
import "./App.css";

function App() {
  const [keyword, setKeyword] = useState("matrix");
  
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
