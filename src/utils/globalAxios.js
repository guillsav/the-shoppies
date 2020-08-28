import axios from 'axios';

export default () => {
  return axios.create({
    headers: {
      'content-type': 'application/json',
    },
    params: {
      apikey: process.env.REACT_APP_OMDB_API_KEY,
    },
  });
};
