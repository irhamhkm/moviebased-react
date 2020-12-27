import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import MovieItem from './MovieItem';

function Carousel(props) {
  const { title, loading, error, data = []} = props;
  const [isDesktop, setIsDesktop] = useState(false);
  const [scrollLeftValue, setScrollLeftValue] = useState(0);
  const container = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsDesktop(true);
    }
  }, [])

  const scrollLeft = () => {
    container.current.scrollLeft -= 166;
    setScrollLeftValue(container.current.scrollLeft);
  }
  const scrollRight = () => {
    container.current.scrollLeft += 166;
    setScrollLeftValue(container.current.scrollLeft);
  }
  const openSeeMore = () => {}

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between px-3">
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
          {loading && (<div>loading gan...</div>)}
          {error && (<div>{error}!</div>)}
          {data && (
            <div className="carousel-content">
              {data.slice(0, 9).map((movie) => (
                <MovieItem key={movie.id} data={movie}/>
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
  error: PropTypes.bool,
  loading: PropTypes.bool,
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
