import React from 'react';

import { SearchContainer, Input } from '../../components';

export default () => (
  <SearchContainer>
    <form>
      <Input type="text" />
      <button type="submit"> Search </button>
    </form>
  </SearchContainer>
);
