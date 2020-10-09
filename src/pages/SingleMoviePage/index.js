import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components';

import { getMovieById } from '../../actions/movies';
import { getSingleMovie, getIsLoadingFlag } from '../../selectors/movies';

const MovieDetails = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadow.small};
  color: white;
  padding: 1rem;
  width: 70%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const Bold = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
`;

const Poster = styled.img`
  width: 248px;
  height: auto;
  margin-right: 1rem;
`;

const SingleMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(getSingleMovie);
  const isLoading = useSelector(getIsLoadingFlag);

  useEffect(() => {
    dispatch(getMovieById(id));
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MovieDetails>
      <div>
        <Poster src={movie.Poster} alt={movie.Title} />
        <p> Ratings: </p>
        <ul>
          { movie.Ratings && movie.Ratings.map((rating) => (
            <li>
              {' '}
              <Bold>
                {' '}
                { rating.Source }
                :
                {' '}
              </Bold>
              {' '}
              { rating.Value}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>
          { `${movie.Title} (${movie.Year})` }
        </h2>
        <h4>
          { `${movie.Released} | ${movie.Runtime} | ${movie.Genre} | ${movie.Country}` }
        </h4>
        <p>
          { movie.Plot }
        </p>
        <p>
          <Bold> Director: </Bold>
          { movie.Director }
        </p>
        <p>
          <Bold>Writer: </Bold>
          { movie.Writer }
        </p>
        <p>
          <Bold>Actors: </Bold>
          { movie.Actors }
        </p>
        <p>
          <Bold>Awards: </Bold>
          { movie.Awards }
        </p>
      </div>
    </MovieDetails>
  );
};

export default SingleMoviePage;
