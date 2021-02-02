import React from 'react'
import './_SimpleTextParsed.scss';
import { parseSanitizedHtml } from "@itau-mgm/utils";

const SimpleTextParsed = ({ text }) => (
  <p className="simple-text-parsed">
    {parseSanitizedHtml(text)}
  </p>
);

export default SimpleTextParsed;


