import React from 'react';
import { posterUrlConstructor, publicImageUrl } from '../../utilities';
import ImageWithPlaceholder from '../hoc/ImageWithPlaceholder';

function MovieItem(props) {
  const { data: { title, overview, vote_average, poster_path }} = props;
  const posterUrl = posterUrlConstructor(poster_path, 'w185');
  return (
    <div className="movie-item">
      <div className="flex flex-row">
        <ImageWithPlaceholder src={posterUrl} wrapperStyles={{ width: '92.5px', height: '144px' }}>
          <img src={posterUrl} alt="movie poster" className="movie-item__image"/>
        </ImageWithPlaceholder>
        <div className="p-4">
          <span className="prose font-medium">{title}</span>
          <span className="flex items-center">
            <img className="w-4 h-4" src={publicImageUrl('star.svg')} alt="star"/>
            <span className="prose font-medium">&nbsp;{vote_average}</span>
          </span>
          <div className="movie-item__overview">{overview}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;