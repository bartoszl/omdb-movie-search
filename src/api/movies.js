import axios from 'axios';
import wait from '../helpers/wait';

const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

export const getMovies = async (params) => {
  const { data } = await axios.get(REACT_APP_API_URL, {
    params: {
      apikey: REACT_APP_API_KEY,
      ...params,
    },
  });

  await wait(2000);

  return data;
};

export const getMovieById = async (id) => getMovies({ i: id, plot: 'full' });
