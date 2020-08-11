import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  const { data } = apiResponse;
  const { id, title, images } = data;
  const { url } = images.downsized_medium;
  return { title, id, url };
};

export default function getSingleGifService({ id }) {
  return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
