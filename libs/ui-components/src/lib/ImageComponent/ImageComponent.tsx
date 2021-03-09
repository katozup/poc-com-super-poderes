import React from 'react';

import './_ImageComponent.scss';

const ImageComponent = ({ url }) => {
  return (
    //TODO: Pegar alt do backend (não tá retornando)
    <img className='image' src={url} alt='' />
  );
};

export default ImageComponent;
