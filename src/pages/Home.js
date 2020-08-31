import React, { useContext } from 'react';
import { useForm } from '../hooks/useForm';
import { MoviesContext } from '../context/movies/MoviesContext';
import Search from '../components/search/Search';
import MoviesList from '../components/moviesList/MoviesList';
import NominatedList from '../components/nominatedList/NominatedList';

const Home = () => {
  const moviesContext = useContext(MoviesContext);

  const { fetchMovies, searchError } = moviesContext;
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
    </div>
  );
};

export default Home;
