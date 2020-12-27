import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_GET_CONFIG } from './graphql';
import Home from './components/pages/Home';

function App() {
  const store = window.sessionStorage;
  useQuery(QUERY_GET_CONFIG, {
    onCompleted: (data) => {
      store.setItem('url', data.getConfig.images.secure_base_url);
    }
  });
  return (
    <div className="bg-blue-300 w-screen min-h-screen">
      <div className="bg-white container w-full md:max-w-md min-h-screen mx-auto">
        <Router>
          <Switch>
            <Route path="">
              
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
