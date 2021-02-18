import React from 'react';

function MovieItem() {
  return (
    <div className="movie-item">
      <div className="flex flex-row">
        <div style={{ width: '92.5px', height: '144px' }}></div>
        <div className="p-4">
          <div className="prose font-medium"></div>
          <div className="flex items-center"></div>
          <div className="movie-item__overview"></div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
