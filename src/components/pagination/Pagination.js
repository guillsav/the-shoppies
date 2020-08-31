import React, { useContext } from 'react';
import { MoviesContext } from '../../context/movies/MoviesContext';

import Prev from '../global/btn/Btn';
import Next from '../global/btn/Btn';

const Pagination = () => {
  const movieContext = useContext(MoviesContext);
  const { fetchNextPage, fetchPrevPage, currentPage } = movieContext;
  return (
    <div className="flex flex-row">
      <Prev text="Prev" onClick={() => fetchPrevPage()} />
      <span>{currentPage}</span>
      <Next text="Next" onClick={() => fetchNextPage()} />
    </div>
  );
};

export default Pagination;
