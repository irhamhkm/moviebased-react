import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { preloadImages } from '../../utilities';
import CarouselItem from './CarouselItem';

function Carousel(props) {
  const { title, data = [], url} = props;
  const [isDesktop, setIsDesktop] = useState(false);
  const [scrollLeftValue, setScrollLeftValue] = useState(0);
  const container = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsDesktop(true);
    }
  }, [])

  useEffect(() => {
    const arrImage = [`${process.env.PUBLIC_URL}/images/left-chevron.svg`, `${process.env.PUBLIC_URL}/images/right-chevron.svg`];
    preloadImages(arrImage);
  }, []);

  const scrollLeft = () => {
    container.current.scrollLeft -= 166;
    setScrollLeftValue(container.current.scrollLeft);
  }
  const scrollRight = () => {
    container.current.scrollLeft += 166;
    setScrollLeftValue(container.current.scrollLeft);
  }
  const openSeeMore = () => {
    history.push(url);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between px-3 mb-3">
        <div className="prose prose-xl text-gray-800 font-medium">{title}</div>
        <div className="prose prose-xl text-blue-700 font-medium"onClick={() => { openSeeMore(); }}>See more</div>
      </div>
      <div className="carousel-hide-scrollbar-container">
        {(data && isDesktop && (scrollLeftValue !== 0)) && (
          <div
            className="carousel-btn-left"
            onClick={() => { scrollLeft(); }}
          >
            <img
              className="w-5 h-5"
              src={`${process.env.PUBLIC_URL}/images/left-chevron.svg`}
              alt="left arrow"
            />
          </div>
        )}
        <div className="carousel-hide-scrollbar" ref={container}>
          {data && (
            <div className="carousel-content">
              {data.slice(0, 9).map((movie) => (
                <CarouselItem key={movie.id} data={movie}/>
              ))}
            </div>
          )}
        </div>
        {(data && isDesktop && (scrollLeftValue !== 1058)) && (
          <div
            className="carousel-btn-right"
            onClick={() => { scrollRight(); }}
          >
            <img
              className="w-5 h-5"
              src={`${process.env.PUBLIC_URL}/images/right-chevron.svg`}
              alt="right arrow"
            />
          </div>
        )}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
  }))
};

export default Carousel;
