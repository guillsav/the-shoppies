import { useState, useContext, useEffect } from 'react';
import { MoviesContext } from '../context/movies/MoviesContext';

export const useForm = (callback, initialState = {}) => {
  const movieContext = useContext(MoviesContext);
  const { setTerm } = movieContext;
  const [values, setValues] = useState(initialState);

  const handleChange = e => {
    e.persist();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (values.search) {
      setTerm(values.search);
    }
    if (values.search === '') {
      setTerm('');
    }
    // eslint-disable-next-line
  }, [values]);

  const handleSubmit = e => {
    e.preventDefault();
    callback();
    setValues(initialState);
  };

  return [values, handleChange, handleSubmit];
};
