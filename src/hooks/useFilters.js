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

  return {
    applyFilters,
    filters,
  };
};

export default useFilters;
