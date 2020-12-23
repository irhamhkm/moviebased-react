import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_GET_UPCOMING_MOVIES } from '../../graphql';

import Carousel from '../common/Carousel';
// import Showcase from '../common/Showcase';

function Home() {
  const { loading, error, data: getUpcomingMovies } = useQuery(QUERY_GET_UPCOMING_MOVIES);
  return (
    <div className="bg-blue-300 w-screen min-h-screen">
      <div className="bg-white container w-full md:max-w-md min-h-screen mx-auto">
        {loading && (<div>Loading...</div>)}
        {error && (<div>Error</div>)}
        {(!loading && !error) && (
          <Carousel
            loading={loading}
            error={error}
            data={getUpcomingMovies.getUpcomingMovies}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
