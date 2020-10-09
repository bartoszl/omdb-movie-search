import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Loader, Ratings, InfoText,
} from '../../components';

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
  border-radius: 3px;
`;

const Poster = styled.img`
  width: 248px;
  height: auto;
  margin-right: 1rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  margin-top: 0;
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
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <MovieDetails>
      <div>
        <Poster src={movie.Poster} alt={movie.Title} />
        <Ratings ratings={movie.Ratings || []} />
      </div>
      <div>
        <Title>
          { `${movie.Title} (${movie.Year})` }
        </Title>
        <h4>
          { `${movie.Released}, ${movie.Runtime}, ${movie.Genre}, ${movie.Country}` }
        </h4>
        <p>
          { movie.Plot }
        </p>
        <InfoText label="Director: ">
          { movie.Director }
        </InfoText>
        <InfoText label="Writer: ">
          { movie.Writer }
        </InfoText>
        <InfoText label="Actors: ">
          { movie.Actors }
        </InfoText>
        <InfoText label="Awards: ">
          { movie.Awards }
        </InfoText>
      </div>
    </MovieDetails>
  );
};

export default SingleMoviePage;
