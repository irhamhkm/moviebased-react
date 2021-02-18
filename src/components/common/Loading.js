import React from 'react';
import { publicImageUrl } from '../../utilities';

function Loading() {
  return (
    <div>
      <img src={publicImageUrl('loading.svg')} alt="loading..."/>
    </div>
  );
}

export default Loading;