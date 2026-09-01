// import useMovies from "../../utils/useMovies";
import AccordionCard from "../AccordionCard";
import { useLoaderData } from "react-router";

const MovieList = () => {
  //   const movies = useMovies();
  const movieCategories = useLoaderData();
  console.log(movieCategories);
  return (
    <div className="movie-list-cuz-why-not">
      <h2>Sorry! Swiggy API call rejects. Here's a list of movies 🙂 </h2>
      <h2>So Here's an accordion example using tmdb movie lists</h2>

      <ul>
        {movieCategories.map((movieCategory) => {
          return (
            <AccordionCard
              key={movieCategory.id}
              name={movieCategory.name}
              movies={movieCategory.results}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default MovieList;
