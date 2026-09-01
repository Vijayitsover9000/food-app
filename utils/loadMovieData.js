import { TMDB_BASE_URL } from "./common";
import { MovieLists } from "./common";
const API_KEY = process.env.TMDB_API_READ_ACCESS_TOKEN;

const options = {
  method: "GET",
  headers: { accept: "application/json", Authorization: `Bearer ${API_KEY}` },
};

const loadMovieData = async () => {
  const fetchMovieData = async (movieCategory) => {
    const url_movie = TMDB_BASE_URL + "movie/" + movieCategory.id;
    const response = await fetch(url_movie, { ...options });
    const data = await response.json();
    const final_data =  {
      ...data,
      id: movieCategory.id,
      name: movieCategory.name,
    };
    return final_data;
  };
  const moviePromises = MovieLists.map(fetchMovieData);
  const movies = await Promise.all(moviePromises);
  console.log("Final movies:", movies);
  return movies;
};

export default loadMovieData;
