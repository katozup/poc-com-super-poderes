import React from 'react'
import './_SimpleTextParsed.scss';
import { parseSanitizedHtml } from '@zup-mgm/utils';

const SimpleTextParsed = ({ text, componentId }) => (
  <p id={componentId} className="simple-text-parsed">
    {parseSanitizedHtml(text)}
  </p>
);

export default SimpleTextParsed;


