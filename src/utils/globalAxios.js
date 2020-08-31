import axios from 'axios';

export default () => {
  return axios.create({
    headers: {
      'content-type': 'application/json',
    },
    baseURL: process.env.REACT_APP_API_URL,
    params: {
      apikey: process.env.REACT_APP_OMDB_API_KEY,
    },
  });
};
