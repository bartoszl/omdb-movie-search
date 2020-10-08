import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';
import { css } from '@emotion/core';
import useFilters from '../../hooks/useFilters';
import {
  Movie, MovieContainer,
} from '../../components';
import { getMovies } from '../../actions/movies';
import { getMovieList, getIsLoadingFlag } from '../../selectors/movies';
import { SINGLE_MOVIE_URL } from '../../constants/routes';

const loaderCss = css`
  margin-top: 150px;
`;

const IndexPage = () => {
  const { filters } = useFilters();
  const { s } = filters;
  const dispatch = useDispatch();
  const movies = useSelector(getMovieList);
  const isLoading = useSelector(getIsLoadingFlag);

  useEffect(() => {
    if (s) {
      dispatch(getMovies(filters));
    }
  }, [filters]);

  // const handleMovieClick = () => {
  //   history.push(SINGLE_MOVIE_URL.replace(':id', id));
  // };

  return (
    <MovieContainer>
      <BeatLoader color="white" size={50} loading={isLoading} css={loaderCss} />

      { movies.map(({
        Poster, Title, Year, imdbID,
      }) => (
        <Movie imgSrc={Poster} title={Title} year={Year} id={imdbID} />
      ))}
    </MovieContainer>
  );
};

export default IndexPage;
