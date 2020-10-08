import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getMovieById } from '../../actions/movies';

const SingleMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieById(id));
  }, [id]);

  return (
    <div>
      Single Movie Page
    </div>
  );
};

export default SingleMoviePage;
