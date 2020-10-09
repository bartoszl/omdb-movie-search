import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './components';
import { IndexPage, SingleMoviePage } from './pages';
import { INDEX_URL, SINGLE_MOVIE_URL } from './constants/routes';

const App = () => (
  <HashRouter basename="/">
    <Layout>
      <Switch>
        <Route path={SINGLE_MOVIE_URL} component={SingleMoviePage} />
        <Route path={INDEX_URL} component={IndexPage} />
      </Switch>
    </Layout>
  </HashRouter>
);

export default App;
