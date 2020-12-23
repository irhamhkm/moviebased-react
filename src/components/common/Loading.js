import React from 'react';

function Loading() {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/loading.svg`} alt="loading..."/>
    </div>
  );
}

export default Loading;