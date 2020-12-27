import React from 'react';
import PropTypes from 'prop-types';

import ImageWithPlaceholder from './ImageWithPlaceholder';
import { imageUrlConstructor } from '../../utilities';

function MovieItem(props) {
  const { data } = props;
  const imageUrl = imageUrlConstructor(data.poster_path, 'w154');
  return (
    <div className="movie-item">
      <ImageWithPlaceholder
        wrapperStyles={{ width: '154px', minHeight: '231px' }}
        imageClass="movie-item__image"
        src={imageUrl}
        alt="movie poster"
      />
      <div className="flex flex-col p-3 h-full">
        <div className="flex flex-row items-center">
          <img className="w-4 h-4" src={`${process.env.PUBLIC_URL}/images/star.svg`} alt="star"/>
          <div className="prose text-gray-800 ml-1">{data.vote_average}</div>
        </div>
        <div className="prose font-medium text-gray-800 w-32 overflow-ellipsis">{data.title}</div>
        <div className="prose prose-lg font-medium text-blue-700 mt-auto mb-5">+ Watchlist</div>
      </div>
    </div>
  );
}

MovieItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
  })
};

export default MovieItem;
