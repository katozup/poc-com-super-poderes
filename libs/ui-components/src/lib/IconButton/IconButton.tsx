/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react'
import PropTypes from 'prop-types';
import './_IconButton.scss';
import store from '@zup-mgm/mgm-redux-store';

const clickHandler = (onClick) => {
  const { actionFunction, actionParameter } = onClick;
  actionFunction(actionParameter, store);
};

const IconButton = ({ onClick, alt, iconName }) => (
  <button
    aria-label={alt}
    onClick={() => clickHandler(onClick)}
    type="button"
    className="button-back"
  >
    <i className={`icon ${iconName}`} /> 
  </button>
);

IconButton.propTypes = {
  alt: PropTypes.string,
  iconName: PropTypes.string,
};

IconButton.defaultProps = {
  alt: 'voltar',
  iconName: '',
};

export default IconButton;
