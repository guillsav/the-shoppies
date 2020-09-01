import React, { useContext } from 'react';
import { MoviesContext } from '../../context/movies/MoviesContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
        <p>Remove by clicking on movie image.</p>
        {nominated.length === 5 && error && (
          <ErrorB text={`${error} (To add a different movie remove one)`} />
        )}
      </NominatedHeading>
      <TransitionGroup component={SelectedList}>
        {nominated &&
          nominated.map(movie => {
            return (
              <CSSTransition
                key={movie.imdbID}
                classNames="display"
                timeout={200}>
                <SelectedMovie
                  movie={movie}
                  removeFromNominated={removeFromNominated}
                />
              </CSSTransition>
            );
          })}
      </TransitionGroup>
    </NominatedContainer>
  );
};

export default NominatedList;
