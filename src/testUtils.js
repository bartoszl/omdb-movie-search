import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from './store';

const Providers = ({ children }) => (
  <Provider store={store}>
    <MemoryRouter>
      {children}
    </MemoryRouter>
  </Provider>
);

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (ui, options) => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
