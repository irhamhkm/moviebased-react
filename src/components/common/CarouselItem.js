import React from 'react';
import PropTypes from 'prop-types';

import ImageWithPlaceholder from '../hoc/ImageWithPlaceholder';
import { imageUrlConstructor } from '../../utilities';

function CarouselItem(props) {
  const { data } = props;
  const imageUrl = imageUrlConstructor(data.poster_path, 'w154');
  return (
    <div className="carousel-item">
      <ImageWithPlaceholder
        wrapperStyles={{ width: '154px', minHeight: '231px' }}
        src={imageUrl}
      >
        <img className="carousel-item__image" src={imageUrl} alt="movie poster" />
      </ImageWithPlaceholder>
      <div className="flex flex-col p-3 h-full">
        <div className="flex flex-row items-center">
          <img className="w-4 h-4" src={`${process.env.PUBLIC_URL}/images/star.svg`} alt="star"/>
          <div className="prose text-gray-800 ml-1">{data.vote_average}</div>
        </div>
        <div className="prose font-medium text-gray-800 max-h-20 w-32 overflow-ellipsis">{data.title}</div>
        <button className="prose prose-lg font-medium text-blue-700 mt-auto rounded-sm focus:ring focus:border-blue-700 focus:outline-none">
          + Watchlist
        </button>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
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

export default CarouselItem;
