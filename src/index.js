import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import Providers from './Providers';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600&display=swap');

  body {
    margin: 0;
    padding: 0;
  }

  * {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
