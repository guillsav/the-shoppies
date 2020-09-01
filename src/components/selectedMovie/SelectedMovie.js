import React from 'react';

import SelectedMovieHeader from '../global/header/Header';
import {
  SelectedMovieContainer,
  SelectedMoviePoster,
} from './SelectedMovie.styles';

const SelectedMovie = ({ movie, removeFromNominated }) => {
  return (
    <SelectedMovieContainer onClick={() => removeFromNominated(movie.imdbID)}>
      <SelectedMoviePoster src={movie.Poster} />
      <div>
        <SelectedMovieHeader movieTitle text={movie.Title} />
        <span>({movie.Year})</span>
      </div>
    </SelectedMovieContainer>
  );
};

export default SelectedMovie;
