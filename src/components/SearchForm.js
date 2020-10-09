import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useFilters from '../hooks/useFilters';
import Input from './Input';
import Button from './Button';
import SearchFormWrapper from './SearchFormWrapper';
import Error from './Error';

import { getError } from '../selectors/movies';
import { INDEX_URL } from '../constants/routes';

const SearchForm = ({ defaultValues }) => {
  const {
    register, handleSubmit, errors,
  } = useForm({
    defaultValues,
  });

  const error = useSelector(getError);

  const { navigateWithSearchQuery } = useFilters();

  const handleSearchSubmit = async (values) => {
    navigateWithSearchQuery(values, INDEX_URL);
  };

  return (
    <form onSubmit={handleSubmit(handleSearchSubmit)} data-testid="search-form">
      <SearchFormWrapper>
        <Input
          type="text"
          ref={register({ minLength: 2 })}
          name="s"
          placeholder="Search..."
        />
        <Button type="submit">
          <FontAwesomeIcon icon={faSearch} color="white" />
        </Button>
      </SearchFormWrapper>
      <Error>
        { (errors.s && 'Query should be at least 2 characters long') || error }
      </Error>
    </form>
  );
};

SearchForm.propTypes = {
  defaultValues: PropTypes.shape({
    s: PropTypes.string,
  }),
};

SearchForm.defaultProps = {
  defaultValues: {},
};

export default SearchForm;
