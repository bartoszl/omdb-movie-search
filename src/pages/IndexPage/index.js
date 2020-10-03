import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFilters from '../../hooks/useFilters';
import {
  SearchContainer, SearchForm, Movie, MovieContainer,
} from '../../components';
import { getMovies } from '../../actions/movies';
import { getMovieList } from '../../selectors/movies';

const IndexPage = () => {
  const { filters, applyFilters } = useFilters();
  const { s } = filters;
  const dispatch = useDispatch();
  const movies = useSelector(getMovieList);

  console.log(movies);

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
        <SearchForm onSubmit={handleSubmit} />
      </SearchContainer>
      <MovieContainer>
        { movies.map(({ Poster, Title }) => (
          <Movie imgSrc={Poster} title={Title} />
        ))}
      </MovieContainer>
    </>
  );
};

export default IndexPage;
