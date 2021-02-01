import React from 'react'
import './_TitleH2Parsed.scss';
import parseSanitizedHtml from '../../parseSanitizedHtml';

const TitleH2Parsed = ({ text }) => (
  <h2 className="head-2-title">
    {parseSanitizedHtml(text)}
  </h2>
);

export default TitleH2Parsed;


