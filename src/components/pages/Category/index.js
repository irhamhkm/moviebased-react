import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types'

import MovieItem from '../../common/MovieItem';
import { useQuery } from '@apollo/client';

function Category(props) {
  const [queryResult, setQueryResult] = useState([]);
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
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + Math.ceil(window.pageYOffset + 1)) >= document.body.offsetHeight) {
        if (!loading && fetchMore) {
          fetchMore({ variables: { page: page + 1 } });
          setPage((p) => (p + 1));
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [page, fetchMore, loading]);

  return (
    <div>
      <div className="flex flex-row flex-wrap w-full justify-evenly pb-1">
        {!!queryResult.length && queryResult.map((value) => (
          <div className="m-3" key={value.id} >
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
