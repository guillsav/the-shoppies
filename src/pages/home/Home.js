import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { MoviesContext } from '../../context/movies/MoviesContext';

import HomeHeader from '../../components/global/header/Header';
import Search from '../../components/search/Search';
import MoviesList from '../../components/moviesList/MoviesList';
import NominatedList from '../../components/nominatedList/NominatedList';
import { ReactComponent as Logo } from '../../images/logo-badge.svg';

import { SectionHeader, SectionContent, LogoContainer } from './Home.styles';

const Home = () => {
  const moviesContext = useContext(MoviesContext);

  const { fetchMovies, searchError, movies } = moviesContext;
  const onSubmit = () => {
    fetchMovies(values.search);
  };

  const [values, handleChange, handleSubmit] = useForm(onSubmit);

  return (
    <div id="home">
      <SectionHeader id="header">
        <LogoContainer>
          <Logo />
          <HomeHeader jumbo text="The Shoppies" />
        </LogoContainer>
        <Search
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          error={searchError}
          values={values}
        />
      </SectionHeader>
      <SectionContent id="content">
        {movies.length > 0 ? <MoviesList /> : <h3>Start movies search... </h3>}
        <NominatedList />
      </SectionContent>
    </div>
  );
};

export default Home;
