import React, { Fragment, useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { isLoading, gifs } = useGifs();

  const handleSubmit = e => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <Fragment>
      <h3 className="App-title">Tendencias</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={handleChange} />
        <button>Buscar</button>
      </form>
      <h3 className="App-title">Última búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <Link to="/search/Britney">Gifs de Britney</Link>
      <Link to="/search/Kanye">Gifs de Kanye</Link>
      <Link to="/search/Pandas">Gifs de Pandas</Link>
    </Fragment>
  );
}
