import React, { useContext } from 'react';
import { MoviesContext } from '../../context/movies/MoviesContext';

import NominatedHeader from '../global/header/Header';
import SelectedMovie from '../selectedMovie/SelectedMovie';
import ErrorB from '../global/error/Error';
import {
  NominatedContainer,
  NominatedHeading,
  SelectedList,
} from './NominatedList.styles';

const NominatedList = () => {
  const movieContext = useContext(MoviesContext);
  const { nominated, removeFromNominated, error } = movieContext;
  return (
    <NominatedContainer>
      <NominatedHeading>
        <NominatedHeader text="Nominations" />
        {nominated.length > 0 && <p>Remove by clicking on movie image.</p>}
        {nominated.length === 5 && error && (
          <ErrorB text={`${error} (To add a different movie remove one)`} />
        )}
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
