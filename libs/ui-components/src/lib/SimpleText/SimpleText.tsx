import React from 'react';

import './_SimpleText.scss';

export function SimpleText(props) {
  return (
    <p className='content-text' id={props.componentId}>
      {props.children}
      {props.text}
    </p>
  );
}

export default SimpleText;
