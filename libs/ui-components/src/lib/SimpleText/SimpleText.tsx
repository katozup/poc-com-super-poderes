import React from 'react';

import './_SimpleText.scss';

export function SimpleText({ text, componentId }) {
  return (
    <div className="content-text-container">
      <p className='content-text' id={componentId}>
        {text}
      </p>
    </div>
  );
}

export default SimpleText;
