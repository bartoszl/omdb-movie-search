import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Input from './Input';
import Button from './Button';

const SearchForm = ({ defaultValues, onSubmit }) => {
  const {
    register, handleSubmit,
  } = useForm({
    defaultValues,
  });

  const handleSearchSubmit = async (values) => {
    try {
      // Submit
      onSubmit(values);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSearchSubmit)} data-testid="search-form">
      <Input
        type="text"
        ref={register}
        name="q"
        placeholder="Search..."
      />
      <Button type="submit"> Search </Button>
    </form>
  );
};

SearchForm.propTypes = {
  defaultValues: PropTypes.shape({
    q: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  defaultValues: {},
};

export default SearchForm;
