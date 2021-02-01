/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react'
import PropTypes from 'prop-types';
import './_BtnBack.scss';
import store from '@zupmgm/mgm-redux-store';

const clickHandler = (onClick) => {
  const { actionFunction, actionParameter } = onClick;
  actionFunction(actionParameter, store);
};

const BtnBack = ({ onClick, alt, iconName }) => (
  <button
    autoFocus
    aria-label={alt}
    onClick={() => clickHandler(onClick)}
    type="button"
    className="button-back"
  >
    {/* <i className={`icon ${iconName}`} /> */}
    <span className="icon">{iconName}</span>
  </button>
);

BtnBack.propTypes = {
  alt: PropTypes.string,
  iconName: PropTypes.string,
};

BtnBack.defaultProps = {
  alt: 'voltar',
  iconName: '',
};

export default BtnBack;
