import React from 'react';

import './_ImageComponent.scss';

const ImageComponent = ({ url, alt }) => {
  return (
    <img className='image' src={url} alt={alt} />
  );
};

export default ImageComponent;
