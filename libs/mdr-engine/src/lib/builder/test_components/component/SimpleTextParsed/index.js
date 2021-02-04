import React from 'react'
import './_SimpleTextParsed.scss';
import parseSanitizedHtml from '../../parseSanitizedHtml';

const SimpleTextParsed = ({ text }) => (
  <p className="simple-text-parsed">
    {parseSanitizedHtml(text)}
  </p>
);

export default SimpleTextParsed;


