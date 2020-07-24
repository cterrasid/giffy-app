import React, { createContext, useState } from "react";

//Creo el ontexto y establezco como valor inicial {}
const GifsContext = createContext({});

// Creo el Provider como una funcion, donde "children" representa a lo que voy a envolver con él...
// En sí, gestiono todo lo que voy a pasar a través del Provider, desde acá
export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([]);

  return (
    // Aqui le paso los valores al Provider, aquellos que quiero que estén disponibles en los componentes envueltos por él
    <GifsContext.Provider value={{ gifs, setGifs }}>
      {children}
    </GifsContext.Provider>
  );
}

export default GifsContext;
