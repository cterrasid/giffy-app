import { useState, useEffect } from "react";
import getGifsService from "../services/getGifsService";

export default function useGifs({ keyword } = { keyword: null }) {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);
      const keywordToUse =
        keyword || localStorage.getItem("lastKeyword") || "random";

      getGifsService({ keyword: keywordToUse }).then(gifs => {
        setGifs(gifs);
        setIsLoading(false);
        localStorage.setItem("lastKeyword", keyword)
      });
    },
    [keyword]
  );

  return { isLoading, gifs };
}
