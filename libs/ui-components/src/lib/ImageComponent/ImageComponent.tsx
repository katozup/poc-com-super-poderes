import React from 'react';

import './_ImageComponent.scss';

export interface ImageComponentProps {
  url;
  alt;
  componentId;
}

const ImageComponent = (props: ImageComponentProps) => {
  return <img id={props.componentId} className='image' src={props.url} alt={props.alt} />;
};

export default ImageComponent;
