import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import theme from './config/theme';

const Providers = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  </Provider>
);

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
