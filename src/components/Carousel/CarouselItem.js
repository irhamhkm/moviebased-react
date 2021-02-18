import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ImageWithPlaceholder from '../hoc/ImageWithPlaceholder';
import { posterUrlConstructor, preloadImages, publicImageUrl } from '../../utilities';

function CarouselItem(props) {
  const { data } = props;
  const posterUrl = posterUrlConstructor(data.poster_path, 'w185');

  useEffect(() => {
    const arrImage = [publicImageUrl('star.svg'), posterUrl];
    preloadImages(arrImage);
  },[posterUrl]);

  return (
    <div className="carousel-item">
      <ImageWithPlaceholder
        wrapperStyles={{ width: '154px', minHeight: '231px' }}
        src={posterUrl}
      >
        <img className="carousel-item__image" src={posterUrl} alt="movie poster" />
      </ImageWithPlaceholder>
      <div className="flex flex-col p-3 h-full">
        <div className="flex flex-row items-center">
          <img className="w-4 h-4" src={publicImageUrl('star.svg')} alt="star"/>
          <div className="prose text-gray-800 ml-1">&nbsp;{data.vote_average}</div>
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
  })
};

export default CarouselItem;
