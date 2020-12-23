import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_GET_CONFIG } from './graphql';
import Home from './components/pages/Home';

function App() {
  const store = window.sessionStorage;
  const getConfig = useQuery(QUERY_GET_CONFIG, {
    onCompleted: (data) => {
      store.setItem('url', data.getConfig.images.secure_base_url);
    }
  });
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
