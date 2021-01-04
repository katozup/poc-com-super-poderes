/* eslint-disable jsx-a11y/no-autofocus */
import PropTypes from 'prop-types';
import './_ActionButton.scss';

const clickHandler = (onClick) => {
  const { actionFunction, actionParameter } = onClick;
  actionFunction(actionParameter);
};

const ActionButton = ({ text, onClick, alt }) => (
  <button
    autoFocus
    aria-label={alt}
    onClick={() => clickHandler(onClick)}
    type="button"
    className="action-button primary-button"
  >
    {/* <i className={`icon ${iconName}`} /> */}
    <span className="icon">{text}</span>
  </button>
);

ActionButton.propTypes = {
  alt: PropTypes.string,
  text: PropTypes.string,
};

ActionButton.defaultProps = {
  alt: 'voltar',
  text: '',
};

export default ActionButton;
