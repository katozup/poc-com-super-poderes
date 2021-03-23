import React from 'react';

import './_SpanSimpleText.scss';

export function SpanSimpleText(props) {
  return <span id={props.componentId}>{props.text}</span>;
}

export default SpanSimpleText;
