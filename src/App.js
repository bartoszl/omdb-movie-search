import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './components';
import { IndexPage } from './pages';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" component={IndexPage} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
