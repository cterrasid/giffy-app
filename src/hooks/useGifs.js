import { useContext, useState, useEffect } from "react";
import getGifsService from "../services/getGifsService";
import GifsContext from "../context/GifsContext";

export default function useGifs({ keyword } = { keyword: null }) {
  const [isLoading, setIsLoading] = useState(false);

  // Actualizar el estado del contexto, en lugar del estado local:
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(
    () => {
      setIsLoading(true);
      const keywordToUse =
        keyword || localStorage.getItem("lastKeyword") || "random";

      getGifsService({ keyword: keywordToUse }).then(gifs => {
        setGifs(gifs);
        setIsLoading(false);
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, setGifs]
  );

  return { isLoading, gifs };
}
