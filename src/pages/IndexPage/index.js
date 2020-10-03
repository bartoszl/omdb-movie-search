import React, { useEffect } from 'react';

import useFilters from '../../hooks/useFilters';
import { SearchContainer, SearchForm } from '../../components';

const IndexPage = () => {
  const { filters, applyFilters } = useFilters();
  const { q } = filters;

  useEffect(() => {
    // get movies
  }, [filters]);

  const handleSubmit = (values) => {
    applyFilters(values);
  };

  return (
    <SearchContainer collapsed={q}>
      <SearchForm onSubmit={handleSubmit} />
    </SearchContainer>
  );
};

export default IndexPage;
