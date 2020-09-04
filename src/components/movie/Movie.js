import React from 'react';
import PropTypes from 'prop-types';

import MovieHeader from '../global/header/Header';
import { MovieContainer, MoviePoster } from './movie.styles';

const Movie = ({ movie, addToNominated }) => {
  return (
    <MovieContainer
      onClick={() => addToNominated(movie.imdbID)}
      nominated={movie.isNominated ? true : false}>
      <MoviePoster
        src={movie.Poster}
        selected={movie.isNominated ? true : false}
      />
      <div>
        <MovieHeader movieTitle text={movie.Title} />
        <span>({movie.Year})</span>
      </div>
    </MovieContainer>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  addToNominated: PropTypes.func.isRequired,
};

export default Movie;
