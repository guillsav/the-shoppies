import React, { useContext } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { MoviesContext } from '../../context/movies/MoviesContext';

import Movie from '../movie/Movie';
import ListHeader from '../global/header/Header';
import Pagination from '../pagination/Pagination';
import Error from '../global/error/Error';
import {
  ResultContainer,
  ResultList,
  ResultHeading,
  ResultContent,
  ResultPagination,
} from './MovieList.styles';

const MoviesList = () => {
  const moviesContext = useContext(MoviesContext);
  const { movies, addToNominated, error, nominated, term } = moviesContext;

  return (
    <ResultContainer>
      <ResultHeading>
        <ResultContent>
          <ListHeader
            text={`Results for ${term.length > 0 ? `"${term}"` : ''}`}
          />
          <p>Select by clicking on movie image.</p>
          {nominated.length === 5 && error && <Error text={error} />}
        </ResultContent>
        <ResultPagination>
          <Pagination />
        </ResultPagination>
      </ResultHeading>
      <TransitionGroup
        component={ResultList}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {movies &&
          movies.map(movie => {
            return (
              <CSSTransition
                key={movie.imdbID}
                timeout={300}
                classNames="display">
                <Movie movie={movie} addToNominated={addToNominated} />
              </CSSTransition>
            );
          })}
      </TransitionGroup>
    </ResultContainer>
  );
};

export default MoviesList;
