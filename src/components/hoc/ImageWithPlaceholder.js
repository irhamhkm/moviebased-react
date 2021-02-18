import React from 'react';

function ImageWithPlaceholder(props) {
  const { wrapperStyles, src, children } = props;
  return (
    <div className="inline-flex flex-none justify-center items-center" style={wrapperStyles}>
      <div className="bg-gray-300 w-full h-full inline-flex flex-none justify-center items-center text-left">
        {src ? (
          children
        ) : (
          <div className="bg-blue-500 w-full h-full flex justify-center items-center text-left">
            <span className="p-2 prose prose-2xl text-white text-center font-bold">No Image :(</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageWithPlaceholder;
