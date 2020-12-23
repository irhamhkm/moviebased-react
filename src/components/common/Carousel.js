import React from 'react';

import MovieItem from './MovieItem';

function Carousel(props) {
  const { loading, error, data = {}} = props;
  return (
    <div>
      {loading && (<div>loading gan...</div>)}
      {error && (<div>{error}!</div>)}
      {data && (
        <div className="inline-flex flex-row space-x-1 px-2">
          {data.results.slice(0, 9).map((movie) => (
            <MovieItem key={movie.id} data={movie}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;
