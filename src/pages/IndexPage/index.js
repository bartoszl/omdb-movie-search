import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFilters from '../../hooks/useFilters';
import {
  Movie, MovieContainer, CountDisplay, Loader,
} from '../../components';
import { getMovies } from '../../actions/movies';
import { getMovieList, getIsLoadingFlag, getCount } from '../../selectors/movies';

const IndexPage = () => {
  const { filters } = useFilters();
  const { s } = filters;
  const dispatch = useDispatch();
  const movies = useSelector(getMovieList);
  const isLoading = useSelector(getIsLoadingFlag);
  const count = useSelector(getCount);

  useEffect(() => {
    if (s) {
      dispatch(getMovies(filters));
    }
  }, [filters]);

  const hasMore = movies.length < count;

  return (
    <>
      { !isLoading && <CountDisplay count={count} /> }
      <MovieContainer>
        <Loader isLoading={isLoading} />
        { movies.map(({
          Poster, Title, Year, imdbID,
        }) => (
          <Movie imgSrc={Poster} title={Title} year={Year} id={imdbID} />
        ))}
      </MovieContainer>
      <button type="button"> Load More </button>
    </>
  );
};

export default IndexPage;
