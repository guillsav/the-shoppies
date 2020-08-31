import React, { createContext, useReducer, useEffect } from 'react';
import logger from 'use-reducer-logger';
import moviesReducer from './moviesReducer';
import axios from '../../utils/globalAxios';

import {
  MOVIES_ERROR,
  SEARCH_ERROR,
  SET_TERM_SUCCESS,
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_NEXT_PAGE_START,
  FETCH_NEXT_PAGE_SUCCESS,
  FETCH_PREVIOUS_PAGE_START,
  FETCH_PREVIOUS_PAGE_SUCCESS,
  ADD_TO_NOMINATED_START,
  ADD_TO_NOMINATED_SUCCESS,
  REMOVE_FROM_NOMINATED_START,
  REMOVE_FROM_NOMINATED_SUCCESS,
} from '../types';

export const MoviesContext = createContext();

/*
This context handles the global state related to movies and the actions that relates to it.
===========================================================================================
Actions
  - fetchMovies: Fires when the user submit a term in the search input.
  - addToNominated: Fires when the user want to nominate a movie and adds the movie to the nominated list.
  - removeFromNominated:Fires when the user want to remove a nomination from a movie, and removes the movie from the nominated list.
  - fetchNextPage: Fires when the user click the next button on the pagination component, it shows the next 10 movies if it exists.
  - fetchPrevPage: Fires when the user click the previous button on the pagination component, it shows the previous 10 movies if it exists.
*/

export const MoviesState = ({ children }) => {
  const localMovies = JSON.parse(localStorage.getItem('nominated'));

  const initialState = {
    // If movies are stored in localStorage add movies to state.
    nominated: localMovies ? localMovies : [],
    movies: [],
    term: '',
    movie: null,
    currentPage: null,
    totalResults: null,
    totalNominated: 0,
    isLoading: false,
    error: null,
    searchError: null,
  };

  const [state, dispatch] = useReducer(
    // Displays a log of the dispatched actions in development, for debugging purposes.
    process.env.NODE_ENV === 'development'
      ? logger(moviesReducer)
      : moviesReducer,
    initialState
  );

  useEffect(() => {
    // Persists and keeps track of the nominated movies in the state via local storage.
    localStorage.setItem('nominated', JSON.stringify(state.nominated));
  }, [state]);

  // Checks if any movies returned from the search, is already in nominated array.
  const checkIfNominated = list => {
    // Keeps track of movie IDs in nominated.
    const imdbIDs = state.nominated.map(movie => movie.imdbID);

    list.Search.map(movie => {
      if (imdbIDs.includes(movie.imdbID)) {
        movie.isNominated = true;
      } else {
        movie.isNominated = false;
      }
      return movie;
    });
    return list;
  };

  // Handles fetching of movies based on search query.
  const fetchMovies = async search => {
    try {
      // Handles if user doesn't type any movie title.
      if (!search && state.term === '') {
        await dispatch({
          type: SEARCH_ERROR,
          payload: 'You must enter a movie title!',
        });
        return;
      }

      await dispatch({
        type: SET_TERM_SUCCESS,
        payload: search ? search : state.term,
      });

      if (search) {
        await dispatch({ type: FETCH_MOVIES_START });
        const { data } = await axios().get(`?s=${search}&page=1`);
        const result = checkIfNominated(data);

        result.page = 1;

        await dispatch({ type: FETCH_MOVIES_SUCCESS, payload: result });
      } else {
        await dispatch({
          type: SEARCH_ERROR,
          payload:
            'Enter a different title to get a different result, or click next to see more!',
        });
        return;
      }
    } catch ({ message }) {
      await dispatch({ type: MOVIES_ERROR, paylaod: message });
    }
  };

  // Handles fetching of movies on the next page based on search and the page query parametes.
  const fetchNextPage = async () => {
    try {
      await dispatch({ type: FETCH_NEXT_PAGE_START });

      const page = state.currentPage + 1;

      const { data } = await axios().get(`?s=${state.term}&page=${page}`);

      const result = checkIfNominated(data);

      result.page = page;

      await dispatch({ type: FETCH_NEXT_PAGE_SUCCESS, payload: result });
    } catch ({ message }) {
      await dispatch({ type: MOVIES_ERROR, payload: message });
    }
  };

  // Handles fetching of movies on the previous page based on search and the page query parametes.
  const fetchPrevPage = async () => {
    try {
      await dispatch({ type: FETCH_PREVIOUS_PAGE_START });

      let page;

      if (state.currentPage > 1) {
        page = state.currentPage - 1;
      } else {
        page = 1;
      }

      const { data } = await axios().get(`?s=${state.term}&page=${page}`);

      const result = checkIfNominated(data);

      result.page = page;

      await dispatch({ type: FETCH_PREVIOUS_PAGE_SUCCESS, payload: result });
    } catch ({ message }) {
      await dispatch({ type: MOVIES_ERROR, payload: message });
    }
  };

  // Adds movies to the nominated array in the state.
  const addToNominated = async id => {
    await dispatch({ type: ADD_TO_NOMINATED_START });

    // Filter out the selected movie based on ID.
    const movie = state.movies.filter(movie => movie.imdbID === id);

    // Keeps track of movie IDs in nominated.
    const imdbIDs = state.nominated.map(movie => movie.imdbID);

    if (imdbIDs.includes(movie[0].imdbID) || movie[0].isNominated === true) {
      await dispatch({
        type: MOVIES_ERROR,
        payload: 'You have already nominated this movie',
      });
      return;
    }

    // Makes sure that users can only nominate 5 movies.
    if (state.totalNominated < 5) {
      // Sets boolean flag isNominated on movie to true.
      movie[0].isNominated = true;
      await dispatch({ type: ADD_TO_NOMINATED_SUCCESS, payload: movie[0] });
    } else {
      // Handles maximum movie in nominated error message.
      await dispatch({
        type: MOVIES_ERROR,
        payload: 'You have reached the number of movies to nominate!',
      });
    }
  };

  // Removes movies from the nominated array in the state.
  const removeFromNominated = async id => {
    await dispatch({ type: REMOVE_FROM_NOMINATED_START });

    try {
      await dispatch({ type: REMOVE_FROM_NOMINATED_SUCCESS, payload: id });
    } catch (err) {
      await dispatch({ type: MOVIES_ERROR, payload: 'Movie not found' });
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        nominated: state.nominated,
        movies: state.movies,
        term: state.term,
        movie: state.movie,
        currentPage: state.currentPage,
        totalResults: state.totalResults,
        isLoading: state.isLoading,
        error: state.error,
        searchError: state.searchError,
        fetchMovies,
        fetchNextPage,
        fetchPrevPage,
        addToNominated,
        removeFromNominated,
      }}>
      {children}
    </MoviesContext.Provider>
  );
};
