/**
 * Used to sanitize and parse html strings
 * while removing the unneeded nbsp
 *
 * @param {string} htmlString
 */
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

export default function parseSanitizedHtml(htmlString) {
  const newHtmlString = htmlString;
  const removedNbspString = newHtmlString.replace(
    /<p>(\s?)&nbsp;(\s?)<\/p>/gi,
    ''
  );

  return parse(DOMPurify.sanitize(removedNbspString));
};
