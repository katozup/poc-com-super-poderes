import React from 'react';

import './_SimpleText.scss';

export function SimpleText({ text, componentId }) {
  return (
    <p className='content-text' id={componentId}>
      {text}
    </p>
  );
}

export default SimpleText;
