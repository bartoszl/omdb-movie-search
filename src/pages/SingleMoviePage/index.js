import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components';

import { getMovieById } from '../../actions/movies';
import { getSingleMovie, getIsLoadingFlag } from '../../selectors/movies';

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
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>
        {' '}
        { movie.Title}
      </h2>
      <h4>
        {' '}
        { movie.Released }
      </h4>
      <h5>
        {' '}
        { movie.Runtime }
      </h5>
      <h5>
        {' '}
        { movie.Genre }
      </h5>
      <p>
        {' '}
        Director:
        {' '}
        { movie.Director }
      </p>
      <p>

        Writer:

        { movie.Writer }
      </p>
      <p>

        Actors:

        { movie.Actors }
      </p>
      <p>

        { movie.Country }
      </p>
      <p>

        Awards:

        { movie.Awards }
      </p>
      <p>

        Metascore:

        { movie.Metascore }
      </p>
      <p>

        IMDB Rating:

        { movie.imdbRating }

        (Votes:
        {movie.imdbVotes}
        )
      </p>

      <p>
        {' '}
        { movie.Plot }
      </p>
    </div>
  );
};

export default SingleMoviePage;
