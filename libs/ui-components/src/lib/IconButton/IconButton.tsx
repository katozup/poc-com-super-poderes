/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import PropTypes from 'prop-types';
import './_IconButton.scss';
function IconButton({ onClick, alt, iconName, componentId }) {
  const clickHandler = (onClick) => {
    if(onClick){
      const { actionFunction } = onClick;
      if (actionFunction) {
        actionFunction(onClick);
      }
    }
  };

  return (
    <button
      id={componentId}
      aria-label={alt}
      onClick={() => clickHandler(onClick)}
      type='button'
      className='button-back'
    >
      <i className={`icon ${iconName}`}>
        💩
      </i>
    </button>
  );
}

IconButton.propTypes = {
  alt: PropTypes.string,
  iconName: PropTypes.string,
};

IconButton.defaultProps = {
  alt: 'voltar',
  iconName: '',
};

export default IconButton;
