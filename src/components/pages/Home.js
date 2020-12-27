import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_GET_UPCOMING_MOVIES } from '../../graphql';

import Carousel from '../common/Carousel';
// import Showcase from '../common/Showcase';

function Home() {
  const { loading, error, data: getUpcomingMovies } = useQuery(QUERY_GET_UPCOMING_MOVIES);
  return (
    <div>
      {loading && (<div>Loading...</div>)}
      {error && (<div>Error</div>)}
      {(!loading && !error) && (
        <Carousel
          title="Upcoming Movies"
          loading={loading}
          error={error}
          data={getUpcomingMovies.getUpcomingMovies.results}
        />
      )}
    </div>
  );
};

export default Home;
