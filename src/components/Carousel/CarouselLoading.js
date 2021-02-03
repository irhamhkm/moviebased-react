import React from 'react';

function CarouselLoading() {
  return (
    <div className="carousel-item">
      <div className="carousel-loading__image" />
      <div className="flex flex-col p-3">
        <div className="carousel-loading__text" />
        <div className="carousel-loading__text" />
        <div className="carousel-loading__text" />
        <div className="carousel-loading__button" />
      </div>
    </div>
  );
}

// 28 x 3 + 32 x1 for skeleton
export default CarouselLoading;
