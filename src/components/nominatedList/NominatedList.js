import React, { useContext } from 'react';
import { MoviesContext } from '../../context/movies/MoviesContext';
import Movie from '../movie/Movie';
import Delete from '../global/btn/Btn';

const NominatedList = () => {
  const movieContext = useContext(MoviesContext);
  const { nominated, removeFromNominated } = movieContext;
  return (
    <div>
      {nominated &&
        nominated.map(movie => {
          return (
            <div key={movie.imdbID}>
              <Movie movie={movie} />
              <Delete
                text="Delete"
                onClick={() => removeFromNominated(movie.imdbID)}
              />
            </div>
          );
        })}
    </div>
  );
};

export default NominatedList;
