import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SelectedMovieHeader from '../global/header/Header';
import {
  ActionMSG,
  SelectedMovieContainer,
  SelectedMoviePoster
} from './SelectedMovie.styles';

const SelectedMovie = ({ movie, removeFromNominated }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <SelectedMovieContainer
      onClick={() => removeFromNominated(movie.imdbID)}
      onMouseOver={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}>
      <SelectedMoviePoster src={movie.Poster} />
      <ActionMSG hidden={hidden}>Remove from Favorites</ActionMSG>
      <div>
        <SelectedMovieHeader movieTitle text={movie.Title} />
        <span>({movie.Year})</span>
      </div>
    </SelectedMovieContainer>
  );
};

SelectedMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  removeFromNominated: PropTypes.func.isRequired
};

export default SelectedMovie;
