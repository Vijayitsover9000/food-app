import { useState } from "react";
import { TMDB_SECURE_IMG_BASE_URL } from "../utils/common";
const MovieCard = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={TMDB_SECURE_IMG_BASE_URL+'w500'+movie.backdrop_path}/>
            </li>
        ))}
      </ul>
    </div>
  );
};

const AccordionCard = ({ name, movies }) => {
  const [expandState, setExpandState] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setExpandState(!expandState);
        }}
        className="accordion-card"
      >
        <span className="font-large">{name}</span>
        <span className="font-large">{" ↓ "}</span>
      </div>
      {expandState && <MovieCard movies={movies} />}
    </>
  );
};
export default AccordionCard;
