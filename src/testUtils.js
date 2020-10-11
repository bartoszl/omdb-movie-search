import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './config/theme';

const TestProviders = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MemoryRouter>
      {children}
    </MemoryRouter>
  </ThemeProvider>
);

TestProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (ui, options) => render(ui, { wrapper: TestProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
