import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';
import { css } from '@emotion/core';
import useFilters from '../../hooks/useFilters';
import {
  SearchContainer, SearchForm, Movie, MovieContainer, Logo,
} from '../../components';
import { getMovies } from '../../actions/movies';
import { getMovieList, getIsLoadingFlag } from '../../selectors/movies';

const loaderCss = css`
  margin-top: 150px;
`;

const IndexPage = () => {
  const { filters, applyFilters } = useFilters();
  const { s } = filters;
  const dispatch = useDispatch();
  const movies = useSelector(getMovieList);
  const isLoading = useSelector(getIsLoadingFlag);

  useEffect(() => {
    // get movies
    if (s) {
      dispatch(getMovies(filters));
    }
  }, [filters]);

  const handleSubmit = (values) => {
    applyFilters(values);
  };

  return (
    <>
      <SearchContainer collapsed={s}>
        <Logo />
        <SearchForm onSubmit={handleSubmit} defaultValues={filters} />
      </SearchContainer>
      <MovieContainer>
        <BeatLoader color="white" size={50} loading={isLoading} css={loaderCss} />

        { movies.map(({ Poster, Title, Year }) => (
          <Movie imgSrc={Poster} title={Title} year={Year} />
        ))}
      </MovieContainer>
    </>
  );
};

export default IndexPage;
