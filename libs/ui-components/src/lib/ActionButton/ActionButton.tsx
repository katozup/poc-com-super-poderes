/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react'
import PropTypes from 'prop-types';
import './_ActionButton.scss';

const clickHandler = (onClick) => {
  const { actionFunction, actionParameter } = onClick;
  actionFunction(actionParameter);
};

const ActionButton = ({ text, onClick, alt, styling }) => (
  <button
    autoFocus
    aria-label={alt}
    onClick={() => clickHandler(onClick)}
    type="button"
    className={`action-button ${getButtonStyle(styling)}`}
  >
    <span className="icon">{text}</span>
  </button>
);

export function getButtonStyle(styling) {
  return `${styling}-button`;
}

ActionButton.propTypes = {
  alt: PropTypes.string,
  text: PropTypes.string,
};

ActionButton.defaultProps = {
  alt: 'voltar',
  text: '',
};

export default ActionButton;
