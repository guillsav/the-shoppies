import React, { useContext } from 'react';
import { useForm } from '../hooks/useForm';
import { MoviesContext } from '../context/movies/MoviesContext';
import Search from '../components/search/Search';
import MoviesList from '../components/moviesList/MoviesList';
import NominatedList from '../components/nominatedList/NominatedList';
import Pagination from '../components/pagination/Pagination';

const Home = () => {
  const moviesContext = useContext(MoviesContext);

  const { fetchMovies, searchError, totalResults } = moviesContext;
  const onSubmit = () => {
    fetchMovies(values.search);
  };

  const [values, handleChange, handleSubmit] = useForm(onSubmit);
  return (
    <div className="flex flex-col">
      <Search
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        error={searchError}
        values={values}
      />
      <div className="flex flex-row">
        <MoviesList />
        <NominatedList />
      </div>
      {totalResults > 10 && <Pagination />}
    </div>
  );
};

export default Home;
