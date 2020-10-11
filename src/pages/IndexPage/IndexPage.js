import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import useFilters from '../../hooks/useFilters';
import {
  Movie, MoviesList, CountDisplay, Loader, LoadMoreButton, Center,
} from '../../components';
import { getMovies, clearMovies } from '../../actions/movies';
import { getMovieList, getIsLoadingFlag, getCount } from '../../selectors/movies';
import { SINGLE_MOVIE_URL } from '../../constants/routes';

const PER_PAGE = 10;

const IndexPage = () => {
  const { filters, compileUrlWithQuery } = useFilters();
  const { s } = filters;
  const dispatch = useDispatch();
  const movies = useSelector(getMovieList);
  const isLoading = useSelector(getIsLoadingFlag);
  const count = useSelector(getCount);

  useEffect(() => {
    if (s) {
      dispatch(clearMovies());
      dispatch(getMovies(filters));
    }
  }, [filters]);

  const handleMoreMovies = () => {
    dispatch(getMovies({
      ...filters,
      page: Math.floor(movies.length / PER_PAGE) + 1,
    }));
  };

  const hasMore = movies.length < count;

  const compileMovieUrl = (id) => compileUrlWithQuery(SINGLE_MOVIE_URL.replace(':id', id));

  return (
    <>
      { !isLoading && <CountDisplay count={count} /> }
      <MoviesList>
        { movies.map(({
          Poster, Title, Year, imdbID,
        }) => (
          <Movie
            imgSrc={Poster}
            title={Title}
            year={Year}
            key={imdbID}
            to={compileMovieUrl(imdbID)}
            data-testid={`movie_${imdbID}`}
          />
        ))}
      </MoviesList>
      <Center>
        <Loader isLoading={isLoading} />
        { hasMore && (
        <LoadMoreButton
          type="button"
          onClick={handleMoreMovies}
          data-testid="load-more-button"
        >
          Load More
        </LoadMoreButton>
        )}
      </Center>

    </>
  );
};

export default IndexPage;
