import React, { useContext } from 'react';
import { MoviesContext } from '../../context/movies/MoviesContext';
import Movie from '../movie/Movie';
import Add from '../global/btn/Btn';

const MoviesList = () => {
  const moviesContext = useContext(MoviesContext);
  const { movies, addToNominated } = moviesContext;

  return (
    <div>
      {movies &&
        movies.map(movie => {
          return (
            <div key={movie.imdbID}>
              <Movie movie={movie} />
              <Add
                text="Nominate"
                onClick={() => addToNominated(movie.imdbID)}
              />
            </div>
          );
        })}
    </div>
  );
};

export default MoviesList;
