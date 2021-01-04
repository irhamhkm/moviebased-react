import React from 'react';

function ImageWithPlaceholder(props) {
  const { wrapperStyles, imageClass, src, alt } = props;
  return (
    <div className="bg-blue-500 flex justify-center items-center" style={wrapperStyles}>
      {src ? (
        <img className={imageClass} src={src} alt={alt} />
      ) : (
        <span className="prose prose-2xl text-white text-center font-bold">No Image Available :(</span>
      )}
    </div>
  );
}

export default ImageWithPlaceholder;
