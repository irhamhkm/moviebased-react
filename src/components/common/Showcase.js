import React from 'react';

function Showcase(props) {
  const { loading, error, data } = props;
  return (
    <div>
      {loading && (<div>loading gan...</div>)}
      {error && (<div>{error}!</div>)}
      {data && (<div>data loaded!</div>)}
    </div>
  );
}

export default Showcase;
