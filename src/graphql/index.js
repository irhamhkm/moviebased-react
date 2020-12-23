import { gql } from '@apollo/client';

const QUERY_GET_UPCOMING_MOVIES = gql`
  query getUpcomingMovies {
    getUpcomingMovies {
      total_results
      page
      total_pages
      results {
        poster_path
        overview
        release_date
        id
        title
        popularity
        genre_ids
        status
      }
    }
  }
`;

const QUERY_GET_CONFIG = gql`
  query getConfig {
    getConfig {
      images {
        secure_base_url
      }
    }
  }
`;

export {
  QUERY_GET_CONFIG,
  QUERY_GET_UPCOMING_MOVIES,
};
