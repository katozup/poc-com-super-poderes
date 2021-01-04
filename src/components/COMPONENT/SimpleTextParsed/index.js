import './_SimpleTextParsed.scss';
import parseSanitizedHtml from '../../../utils/parseSanitizedHtml';

const SimpleTextParsed = ({ text }) => (
  <p className="simple-text-parsed">
    {parseSanitizedHtml(text)}
  </p>
);

export default SimpleTextParsed;


