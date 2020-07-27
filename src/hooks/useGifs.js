import { useContext, useState, useEffect } from "react";
import getGifsService from "../services/getGifsService";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

export default function useGifs({ keyword } = { keyword: null }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  // Actualizar el estado del contexto, en lugar del estado local:
  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(
    () => {
      setIsLoading(true);

      getGifsService({ keyword: keywordToUse }).then(gifs => {
        setGifs(gifs);
        setIsLoading(false);
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, keywordToUse, setGifs]
  );

  useEffect(
    () => {
      if (page === INITIAL_PAGE) return;
      setIsLoadingNextPage(true);
      getGifsService({ keyword: keywordToUse, page }).then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs)); // Se actualiza el state con una funcion que devuelve los gifs que ya estaban, concatenados con los de la proxima pagina
        setIsLoadingNextPage(false);
      });
    },
    [page, keywordToUse, setGifs]
  );
  return { isLoading, isLoadingNextPage, gifs, setPage };
}
