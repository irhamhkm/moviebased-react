import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client';

import MovieItem from '../../common/MovieItem';
import { publicImageUrl } from '../../../utilities';

function MovieList(props) {
  const [queryResult, setQueryResult] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const { query } = props;

  const { loading, error, fetchMore } = useQuery(query, {
    variables: {
      page: 1
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setQueryResult(Object.values(data)[0].results);
      setTotalPages(Object.values(data)[0].total_pages);
    }
  });

  useEffect(() => {
    let mounted = true;
    let handleScroll = null;
    
    if (mounted) {
      handleScroll = () => {
        if ((window.innerHeight + Math.ceil(window.pageYOffset + 1)) >= document.body.offsetHeight) {
          if (!loading && (page < totalPages)) {
            fetchMore({ variables: { page: page + 1 } });
            setPage((p) => (p + 1));
          }
        }
      }
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
    return function cleanup() {
      mounted = false;
      window.removeEventListener('scroll', handleScroll);
    }
  }, [page, totalPages, fetchMore, loading]);

  return (
    <div>
      <div className="justify-items-center p-4">
        {!!queryResult.length && queryResult.map((value) => (
          <div key={value.id} className="mb-3">
            <MovieItem data={value} />
          </div>
        ))}
      </div>
      {(loading) && (
        <div className="flex justify-center">
          <img src={publicImageUrl('loading.svg')} alt="loading"/>
        </div>
      )}
      {(error) && (<div></div>)}
    </div>
  );
}

// Category.propTypes = {
//   query: PropTypes.
// }

export default MovieList;
