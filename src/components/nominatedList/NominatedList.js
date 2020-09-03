import React, { useContext } from 'react';
import { MoviesContext } from '../../context/movies/MoviesContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import NominatedHeader from '../global/header/Header';
import SelectedMovie from '../selectedMovie/SelectedMovie';
import ErrorB from '../global/error/Error';
import {
  NominatedContainer,
  NominatedHeading,
  NominatedContent,
  SelectedList,
} from './NominatedList.styles';

const NominatedList = () => {
  const movieContext = useContext(MoviesContext);
  const { nominated, removeFromNominated, error } = movieContext;
  return (
    <NominatedContainer>
      <NominatedHeading>
        <NominatedContent>
          <NominatedHeader text="Nominations" />
          <p>Remove by clicking on the poster</p>
          {nominated.length === 5 &&
            error &&
            Array.isArray(error) &&
            error.length > 0 && <ErrorB warning text={error[1]} />}
        </NominatedContent>
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
