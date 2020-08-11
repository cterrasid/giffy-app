import { useState, useEffect } from "react";
import useGifs from "./useGifs";
import getSingleGifService from "services/getSingleGifService";

export default function useSingleGif({ id }) {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);
      getSingleGifService({ id })
        .then((gif) => {
          setGif(gif);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
          setError(true);
        });
    }
  }, [gif, id]);

  return { gif, isLoading, error };
}
