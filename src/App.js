import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_GET_CONFIG, QUERY_GET_UPCOMING_MOVIES, QUERY_GET_POPULAR_MOVIES, QUERY_GET_TOP_RATED_MOVIES } from './graphql';
import Home from './components/pages/Home';
import Category from './components/pages/Category';

function App() {
  const store = window.sessionStorage;
  useQuery(QUERY_GET_CONFIG, {
    onCompleted: (data) => {
      store.setItem('url', data.getConfig.images.secure_base_url);
    }
  });
  return (
    <div className="bg-blue-300 min-h-screen">
      <div className="bg-white container w-full max-w-md min-h-screen mx-auto">
        <Router>
          <Switch>
            <Route path="/upcoming">
              <Category query={QUERY_GET_UPCOMING_MOVIES} />
            </Route>
            <Route path="/popular">
              <Category query={QUERY_GET_POPULAR_MOVIES} />
            </Route>
            <Route path="/top-rated">
              <Category query={QUERY_GET_TOP_RATED_MOVIES} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
