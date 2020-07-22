import React, { useState, useEffect } from "react";
import "./App.css";
import getGifsService from "./services/getGifsService";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifsService({ keyword: "rick" }).then(gifs => setGifs(gifs));
  }, []);
  
  return (
    <div className="App">
      <section className="App-content">
        {gifs.map(gif => {
          return (
            <div key={gif.id}>
              <h4>
                {gif.title}
              </h4>
              <img src={gif.url} alt={gif.title} />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
