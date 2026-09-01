import { useState, useEffect } from "react";
import { TMDB_BASE_URL } from "./common";

const API_KEY = process.env.TMDB_API_READ_ACCESS_TOKEN;

const DISCOVER_STRING =
  "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
const options = {
  method: "GET",
  headers: { accept: "application/json", Authorization: `Bearer ${API_KEY}` },
};

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async () => {
    const url_movie = TMDB_BASE_URL + DISCOVER_STRING;
    const response = await fetch(url_movie, { ...options });
    const data = await response.json();
    setMovies(data?.results);
  };
  return movies;
};

export default useMovies;
