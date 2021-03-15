import React from 'react';

import './_TitleH2.scss';

export function TitleH2({ text, componentId }) {
  return (
    <h2 className='title' id={componentId}>
      {text}
    </h2>
  );
}

export default TitleH2;
