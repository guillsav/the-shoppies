import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback,
} from 'react';
import logger from 'use-reducer-logger';
import moviesReducer from './moviesReducer';
import axios from '../../utils/globalAxios';

import {
  MOVIES_ERROR,
  CLEAR_MOVIES,
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

/*
This context handles the global state related to movies and the actions that relates to it.
===========================================================================================
Actions
  - fetchMovies: Fires when the user types a term in the search input.
  - addToNominated: Fires when the user want to nominate a movie and adds the movie to the nominated list.
  - removeFromNominated:Fires when the user want to remove a nomination from a movie, and removes the movie from the nominated list.
  - fetchNextPage: Fires when the user click the next button on the pagination component, it shows the next 10 movies if it exists.
  - fetchPrevPage: Fires when the user click the previous button on the pagination component, it shows the previous 10 movies if it exists.
*/

export const MoviesContext = createContext();

export const MoviesState = ({ children }) => {
  const localMovies = JSON.parse(localStorage.getItem('nominated'));

  const initialState = {
    // If movies are stored in localStorage add movies to state.
    nominated: localMovies ? localMovies : [],
    movies: [],
    term: '',
    currentPage: null,
    totalResults: null,
    totalNominated: 0,
    isLoading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(
    // Displays a log of the dispatched actions in development, for debugging purposes.
    process.env.NODE_ENV === 'development'
      ? logger(moviesReducer)
      : moviesReducer,
    initialState
  );

  // Checks if any movies returned from the search, is already in nominated array.
  const checkIfNominated = useCallback(
    list => {
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
    },
    [state.nominated]
  );

  // Sets the term in state
  const setTerm = searchTerm =>
    dispatch({
      type: SET_TERM_SUCCESS,
      payload: searchTerm,
    });

  // Handles fetching of movies based on search query.
  const fetchMovies = async () => {
    try {
      await dispatch({ type: FETCH_MOVIES_START });
      const { data } = await axios().get(
        `?s=${state.term}&page=${state.currentPage}`
      );

      const result = checkIfNominated(data);

      result.page = state.currentPage ? state.currentPage : 1;

      await dispatch({ type: FETCH_MOVIES_SUCCESS, payload: result });
    } catch ({ message }) {
      await dispatch({ type: MOVIES_ERROR, payload: message });
    }
  };

  const fetchOnLoad = useCallback(async () => {
    const classic = 'Star Wars';
    setTerm(classic);

    try {
      const { data } = await axios().get(
        `?s=${state.term}&page=${state.currentPage}`
      );

      const result = await checkIfNominated(data);

      await dispatch({ type: FETCH_MOVIES_SUCCESS, payload: result });
    } catch ({ message }) {
      await dispatch({ type: MOVIES_ERROR, payload: message });
    }
  }, [checkIfNominated, state.currentPage]);

  // Handles fetching of movies on the next page based on search and the page query parametes.
  const fetchNextPage = async () => {
    try {
      await dispatch({ type: FETCH_NEXT_PAGE_START });

      const page = state.currentPage ? state.currentPage + 1 : 1;

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
    if (state.nominated.length < 5 && state.totalNominated < 5) {
      // Sets boolean flag isNominated on movie to true.
      movie[0].isNominated = true;

      await dispatch({
        type: ADD_TO_NOMINATED_SUCCESS,
        payload: { movie: movie[0] },
      });
    } else {
      // Handles maximum movie in nominated error message.
      await dispatch({
        type: MOVIES_ERROR,
        payload:
          'You have reached the maximum number of movies you can nominate.',
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

  useEffect(() => {
    if (state.term === '' && state.movies.length === 0) {
      fetchOnLoad();
    }

    fetchMovies(state.term);
    if (state.term === '' && state.movies.length > 0) {
      dispatch({ type: CLEAR_MOVIES });
    }
    // Persists and keeps track of the nominated movies in the state via local storage.
    localStorage.setItem('nominated', JSON.stringify(state.nominated));
    // eslint-disable-next-line
  }, [state.nominated, state.term]);

  return (
    <MoviesContext.Provider
      value={{
        nominated: state.nominated,
        movies: state.movies,
        term: state.term,
        currentPage: state.currentPage,
        totalResults: state.totalResults,
        isLoading: state.isLoading,
        error: state.error,
        setTerm,
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
