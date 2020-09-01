/**
 * This reducer handles the state logic based on the dispatched actions.
 */

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

export default (state, action) => {
  switch (action.type) {
    case FETCH_MOVIES_START:
    case FETCH_NEXT_PAGE_START:
    case FETCH_PREVIOUS_PAGE_START:
    case ADD_TO_NOMINATED_START:
    case REMOVE_FROM_NOMINATED_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case SET_TERM_SUCCESS:
      return {
        ...state,
        term: action.payload,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.Search,
        totalResults: parseInt(action.payload.totalResults),
        currentPage: action.payload.page,
        isLoading: false,
        error: null,
      };
    case FETCH_NEXT_PAGE_SUCCESS:
    case FETCH_PREVIOUS_PAGE_SUCCESS:
      return {
        ...state,
        movies: action.payload.Search,
        totalResults: parseInt(action.payload.totalResults),
        currentPage: action.payload.page,
        isLoading: false,
        error: null,
      };
    case ADD_TO_NOMINATED_SUCCESS:
      return {
        ...state,
        nominated: [...state.nominated, action.payload],
        totalNominated: state.totalNominated + 1,
        isLoading: false,
        error: null,
      };
    case REMOVE_FROM_NOMINATED_SUCCESS:
      return {
        ...state,
        nominated: state.nominated.filter(
          movie => movie.imdbID !== action.payload
        ),
        movies: state.movies.map(movie => {
          if (movie.imdbID === action.payload) {
            movie.isNominated = false;
          }
          return movie;
        }),
        totalNominated: state.totalNominated - 1,
        isLoading: false,
        error: null,
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
      };
    case MOVIES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
