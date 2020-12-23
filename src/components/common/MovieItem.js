import React from 'react';

import { imageUrlConstructor } from '../../utilities';

function MovieItem(props) {
  const { data } = props;
  return (
    <div className="movie-item">
      <img
        className="movie-item__image"
        src={imageUrlConstructor(data.poster_path, 'w92')}
        alt="movie poster"
      />
    </div>
  );
}

export default MovieItem;
