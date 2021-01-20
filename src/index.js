import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getUpcomingMovies: {
          keyArgs: false,
          merge(existing = {}, incoming) {
            if (incoming.page <= existing.page) {
              return existing.results || [];
            }
            return {...incoming, results: [...existing.results || [], ...incoming.results]};
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { client };
