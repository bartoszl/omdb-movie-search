import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const DEFAULT_URL = 'http://www.omdbapi.com/';
const API_KEY = '157f34ed';
// const IMDB_ID = 'tt3896198';

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

export const getMovies = createAsyncThunk(
  'GET_MOVIE_LIST',
  async (params, { rejectWithValue }) => {
    const { data } = await axios.get(DEFAULT_URL, {
      params: {
        apikey: API_KEY,
        // i: IMDB_ID,
        ...params,
      },
    });

    await wait(3000);

    if (data.Response === 'False') {
      return rejectWithValue(data.Error);
    }

    return {
      records: data.Search,
    };
  },
);
