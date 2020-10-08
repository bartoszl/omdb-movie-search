import axios from 'axios';

const DEFAULT_URL = 'http://www.omdbapi.com/';
const API_KEY = '157f34ed';

export const getMovies = async (params) => {
  const { data } = await axios.get(DEFAULT_URL, {
    params: {
      apikey: API_KEY,
      ...params,
    },
  });

  return data;
};

export const getMovieById = async (id) => getMovies({ i: id });
