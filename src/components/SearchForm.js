import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useFilters from '../hooks/useFilters';
import Input from './Input';
import Button from './Button';
import SearchFormWrapper from './SearchFormWrapper';

const SearchForm = ({ defaultValues }) => {
  const {
    register, handleSubmit,
  } = useForm({
    defaultValues,
  });

  const { applyFilters } = useFilters();

  const handleSearchSubmit = async (values) => {
    try {
      applyFilters(values);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SearchFormWrapper onSubmit={handleSubmit(handleSearchSubmit)} data-testid="search-form">
      <Input
        type="text"
        ref={register}
        name="s"
        placeholder="Search..."
      />
      <Button type="submit">
        <FontAwesomeIcon icon={faSearch} color="white" />
      </Button>
    </SearchFormWrapper>
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
