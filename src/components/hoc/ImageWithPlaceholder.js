import React from 'react';

function ImageWithPlaceholder(props) {
  const { wrapperStyles, src, children } = props;
  return (
    <div className="bg-blue-500 inline-flex justify-center items-center" style={wrapperStyles}>
      {src ? (
        children
      ) : (
        <span className="prose prose-2xl text-white text-center font-bold">No Image Available :(</span>
      )}
    </div>
  );
}

export default ImageWithPlaceholder;
