import React from 'react';

function ImageWithPlaceholder(props) {
  const { wrapperStyles, imageClass, src, alt } = props;
  return (
    <div className="bg-gray-700" style={wrapperStyles}>
      <img className={imageClass} src={src} alt={alt} />
    </div>
  );
}

export default ImageWithPlaceholder;
