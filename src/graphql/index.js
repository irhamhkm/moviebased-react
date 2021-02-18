import { gql } from '@apollo/client';

const QUERY_GET_UPCOMING_MOVIES = gql`
  query getUpcomingMovies($page: Int!) {
    upcomingMovies(page: $page) {
      total_pages
      page
      results {
        poster_path
        overview
        release_date
        id
        title
        genre_ids
        vote_count
        vote_average
      }
    }
  }
`;

const QUERY_GET_POPULAR_MOVIES = gql`
  query getPopularMovies($page: Int!) {
    popularMovies(page: $page) {
      total_pages
      page
      results {
        poster_path
        overview
        release_date
        id
        title
        genre_ids
        vote_count
        vote_average
      }
    }
  }
`;

const QUERY_GET_TOP_RATED_MOVIES = gql`
  query getTopRatedMovies($page: Int!) {
    topRatedMovies(page: $page) {
      total_pages
      page
      results {
        poster_path
        overview
        release_date
        id
        title
        genre_ids
        vote_count
        vote_average
      }
    }
  }
`;

const QUERY_GET_CONFIG = gql`
  query getConfig {
    config {
      images {
        secure_base_url
        poster_sizes
      }
    }
  }
`;

export {
  QUERY_GET_CONFIG,
  QUERY_GET_UPCOMING_MOVIES,
  QUERY_GET_POPULAR_MOVIES,
  QUERY_GET_TOP_RATED_MOVIES
};
