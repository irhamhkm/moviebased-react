import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_GET_POPULAR_MOVIES, QUERY_GET_TOP_RATED_MOVIES, QUERY_GET_UPCOMING_MOVIES } from '../../../graphql';

import Carousel from '../../common/Carousel/Carousel';
// import Showcase from '../common/Showcase';

function Home() {
  const { loading: upcomingMoviesLoading, error: upcomingMoviesError, data: { upcomingMovies = {} } = {} } = useQuery(QUERY_GET_UPCOMING_MOVIES, {
    variables: {
      page: 1
    }
  });
  const { loading: popularMoviesLoading, error: popularMoviesError, data: { popularMovies = {} } = {} } = useQuery(QUERY_GET_POPULAR_MOVIES, {
    variables: {
      page: 1
    }
  });
  const { loading: topRatedMoviesLoading, error: topRatedMoviesError, data: { topRatedMovies = {} } = {} } = useQuery(QUERY_GET_TOP_RATED_MOVIES, {
    variables: {
      page: 1
    }
  });
  
  return (
    <div>
      <Carousel
        title="Upcoming Movies"
        loading={upcomingMoviesLoading}
        error={upcomingMoviesError}
        data={upcomingMovies.results}
        url={'/upcoming'}
      />
      <Carousel
        title="Popular Movies"
        loading={popularMoviesLoading}
        error={popularMoviesError}
        data={popularMovies.results}
        url={'/popular'}
      />
      <Carousel
        title="Top Rated Movies"
        loading={topRatedMoviesLoading}
        error={topRatedMoviesError}
        data={topRatedMovies.results}
        url={'/top-rated'}
      />
    </div>
  );
};

export default Home;
