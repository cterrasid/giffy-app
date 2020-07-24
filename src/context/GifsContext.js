import React, { createContext, useState } from "react";

//Creo el ontexto y establezco como valor inicial {}
const Context = createContext({});

// Creo el Provider como una funcion, donde "children" representa a lo que voy a envolver con él...
// En sí, gestiono todo lo que voy a pasar a través del Provider, desde acá
export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([]);

  return (
    <Context.Provider value={{gifs, setGifs}}>
      {children}
    </Context.Provider>
  );
}

export default Context;
