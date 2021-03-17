/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import PropTypes from 'prop-types';
import './_IconButton.scss';
import { useHistory } from 'react-router-dom';
import { ActionName } from '@zup-mgm/mdr-engine';
import { slideDown } from '@zup-mgm/utils';
import { modalActions } from '@zup-mgm/mgm-redux-store';
import { useDispatch } from 'react-redux';
function IconButton({ onClick, alt, iconName, componentId }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = (onClick) => {
    const { actionFunction, actionParameter, actionName } = onClick;
    if (actionFunction) {
      const actionFunctionPayload = getActionFunctionPayload(
        actionName,
        actionParameter
      );
      actionFunction(actionFunctionPayload);
    }
  };

  const getActionFunctionPayload = (actionName, actionParameter) => {
    if (actionName === ActionName.NAVIGATION_BACK) {
      return {
        history,
      };
    }
    if (actionName === ActionName.CLOSE_MODAL) {
      slideDown();
      return {
        actionParameter,
      };
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
      <i className={`icon ${iconName}`} />
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
