import React, { useContext } from 'react';
import { MoviesContext } from '../../context/movies/MoviesContext';

import NominatedHeader from '../global/header/Header';
import SelectedMovie from '../selectedMovie/SelectedMovie';
import {
  NominatedContainer,
  NominatedHeading,
  SelectedList,
} from './NominatedList.styles';

const NominatedList = () => {
  const movieContext = useContext(MoviesContext);
  const { nominated, removeFromNominated } = movieContext;
  return (
    <NominatedContainer>
      <NominatedHeading>
        <NominatedHeader text="Nominations" />
        {nominated.length > 0 && <p>Remove by clicking on movie image.</p>}
      </NominatedHeading>
      <SelectedList>
        {nominated &&
          nominated.map(movie => {
            return (
              <SelectedMovie
                key={movie.imdbID}
                movie={movie}
                removeFromNominated={removeFromNominated}
              />
            );
          })}
      </SelectedList>
    </NominatedContainer>
  );
};

export default NominatedList;
