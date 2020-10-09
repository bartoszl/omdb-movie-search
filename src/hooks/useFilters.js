import { useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';

const useFilters = () => {
  const { search, pathname } = useLocation();
  const history = useHistory();

  const filters = useMemo(() => qs.parse(search.slice(1)), [search]);

  const applyFilters = (newFilters) => {
    history.push(`${pathname}?${qs.stringify({
      ...filters,
      ...newFilters,
    })}`);
  };

  const compileUrlWithQuery = (url) => `${url}?${qs.stringify(filters)}`;

  return {
    applyFilters,
    filters,
    compileUrlWithQuery,
  };
};

export default useFilters;
