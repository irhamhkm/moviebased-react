import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_GET_UPCOMING_MOVIES } from '../../../graphql';

import Carousel from '../../common/Carousel';
// import Showcase from '../common/Showcase';

function Home() {
  const { loading, error, data: upcomingMoviesData = {} } = useQuery(QUERY_GET_UPCOMING_MOVIES, {
    variables: {
      page: 1
    }
  });
  return (
    <div>
      {(!loading && !error) && (
        <Carousel
          title="Upcoming Movies"
          data={upcomingMoviesData.getUpcomingMovies.results}
          url={'/upcoming'}
        />
      )}
    </div>
  );
};

export default Home;
