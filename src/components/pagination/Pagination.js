import React, { useContext } from 'react';
import { MoviesContext } from '../../context/movies/MoviesContext';

import { ReactComponent as Prev } from '../../images/arrow-circle-left.svg';
import { ReactComponent as Next } from '../../images/arrow-circle-right.svg';
import { PaginationContainer } from './Pagination.styles';

const Pagination = () => {
  const movieContext = useContext(MoviesContext);
  const {
    fetchNextPage,
    fetchPrevPage,
    currentPage,
    totalResults,
  } = movieContext;
  const totalPages = Math.floor(totalResults / 10);
  return (
    <PaginationContainer>
      <Prev
        text="Prev"
        onClick={() => fetchPrevPage()}
        style={{ cursor: 'pointer', outline: 'none' }}
        className={currentPage === 1 ? 'off' : null}
      />
      <Next
        text="Next"
        onClick={() => fetchNextPage()}
        style={{ cursor: 'pointer', outline: 'none' }}
        className={currentPage === totalPages ? 'off' : null}
      />
    </PaginationContainer>
  );
};

export default Pagination;
