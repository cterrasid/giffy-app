import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse;
  return data;
};

export default async function getTrendingSearchesService(
  { limit = 25, keyword = "panda", page = 0 } = {}
) {
  const url = `${API_URL}/trending/searches?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page *
    limit}&rating=g&lang=en`;
  const res = await fetch(url);
  const response = await res.json().then(fromApiResponseToGifs);

  return response;
}
