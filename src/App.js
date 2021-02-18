import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_GET_CONFIG, QUERY_GET_UPCOMING_MOVIES, QUERY_GET_POPULAR_MOVIES, QUERY_GET_TOP_RATED_MOVIES } from './graphql';
import Home from './components/pages/Home';
import MovieList from './components/pages/MovieList';
import WithNavbar from './components/hoc/WithNavbar';

function App() {
  const store = window.sessionStorage;
  useQuery(QUERY_GET_CONFIG, {
    onCompleted: (data) => {
      store.setItem('url', data.config.images.secure_base_url);
    }
  });
  return (
    <div className="bg-blue-300 min-h-screen">
      <div className="bg-white container w-full max-w-md min-h-screen mx-auto">
        <Router>
          <Switch>
            <Route path="/upcoming">
              <WithNavbar>
                <MovieList query={QUERY_GET_UPCOMING_MOVIES} />
              </WithNavbar>
            </Route>
            <Route path="/popular">
              <MovieList query={QUERY_GET_POPULAR_MOVIES} />
            </Route>
            <Route path="/top-rated">
              <MovieList query={QUERY_GET_TOP_RATED_MOVIES} />
            </Route>
            <Route path="/">
              <WithNavbar>
                <Home />
              </WithNavbar>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
