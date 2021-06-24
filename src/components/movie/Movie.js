import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MovieHeader from '../global/header/Header';
import { ActionMSG, MovieContainer, MoviePoster } from './movie.styles';

const Movie = ({ movie, addToNominated }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <MovieContainer
      onMouseOver={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
      onClick={() => addToNominated(movie.imdbID)}
      nominated={movie.isNominated ? true : false}>
      <MoviePoster
        src={movie.Poster}
        selected={movie.isNominated ? true : false}
      />
      <ActionMSG hidden={hidden}>Add to Favorites</ActionMSG>
      <div>
        <MovieHeader movieTitle text={movie.Title} />
        <span>({movie.Year})</span>
      </div>
    </MovieContainer>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  addToNominated: PropTypes.func.isRequired
};

export default Movie;
