import React, { useContext } from 'react';
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
            text={`Result for ${term.length > 0 ? `"${term}"` : ''}`}
          />
          <p>Select by clicking on movie image.</p>
          {nominated.length === 5 && error && <Error text={error} />}
        </ResultContent>
        <ResultPagination>
          <Pagination />
        </ResultPagination>
      </ResultHeading>
      <ResultList>
        {movies &&
          movies.map(movie => {
            return (
              <Movie
                key={movie.imdbID}
                movie={movie}
                addToNominated={addToNominated}
              />
            );
          })}
      </ResultList>
    </ResultContainer>
  );
};

export default MoviesList;
