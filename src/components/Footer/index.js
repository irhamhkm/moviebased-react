import React from 'react';
import { publicImageUrl } from '../../utilities';

function Footer() {
  return (
    <div className="mt-4 p-2 pb-4 bg-blue-500 flex">
      <div>
        <span className="prose prose-xl text-white font-normal">API provided by</span>
        <img
          className="w-36"
          src={`${publicImageUrl('tmdb-logo-short.svg')}`}
          alt="The Movie Database"
        />
      </div>
      <div className="ml-8">
        <span className="prose prose-xl text-white font-normal block">This web by</span>
        <span className="prose prose-xl text-black font-medium">Irham N&nbsp;</span>
        <span className="prose prose-xl text-white font-normal inline-flex items-center">with&nbsp;
          <img
            className="w-4 inline"
            src={`${publicImageUrl('heart.svg')}`}
            alt="heart"
            title="Blood, sweat, and tears"
          />
        </span>
        <a href="https://github.com/irhamhkm/moviebased-react" target="_blank" rel="noreferrer noopener">
          <img
            className="w-16"
            src={`${publicImageUrl('github.svg')}`}
            alt="Github"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
