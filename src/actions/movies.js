import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const DEFAULT_URL = 'http://www.omdbapi.com/';
const API_KEY = '157f34ed';
// const IMDB_ID = 'tt3896198';

export const getMovies = createAsyncThunk(
  'GET_MOVIE_LIST',
  async (params) => {
    const { data } = await axios.get(DEFAULT_URL, {
      params: {
        apikey: API_KEY,
        // i: IMDB_ID,
        ...params,
      },
    });

    return {
      records: data.Search,
    };
  },
);
