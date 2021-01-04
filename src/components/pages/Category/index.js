import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types'

import MovieItem from '../../common/MovieItem';
import { useQuery } from '@apollo/client';

function Category(props) {
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
    const handleScroll = () => {
      if ((window.innerHeight + Math.ceil(window.pageYOffset + 1)) >= document.body.offsetHeight) {
        if (!loading && (page < totalPages)) {
          fetchMore({ variables: { page: page + 1 } });
          setPage((p) => (p + 1));
        }
      }
    }
    if (mounted) {
      window.addEventListener('scroll', handleScroll);
    }
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
      mounted = false;
    }
  }, [page, totalPages, fetchMore, loading]);

  return (
    <div>
      <div className="grid gap-4 grid-cols-2 w-full justify-items-center p-4">
        {!!queryResult.length && queryResult.map((value) => (
          <div key={value.id} >
            <MovieItem data={value} />
          </div>
        ))}
      </div>
      {(loading) && (
        <div className="flex justify-center">
          <img src={`${process.env.PUBLIC_URL}/images/loading.svg`} alt="loading"/>
        </div>
      )}
    </div>
  );
}

// Category.propTypes = {
//   query: PropTypes.
// }

export default Category;
