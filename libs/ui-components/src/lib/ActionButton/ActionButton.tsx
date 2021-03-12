/* eslint-disable jsx-a11y/no-autofocus */
import PropTypes from 'prop-types';
import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import ButtonLoading from '../ButtonLoading/ButtonLoading';
import './_ActionButton.scss';
export interface ActionButtonProps {
  isLoading: boolean;
}

const ActionButton = ({
  text,
  onClick,
  alt,
  styling,
  componentId,
  hasLoading,
}) => {
  const shareButton = useSelector((state: RootStateOrAny) => state.share);
  return (
    <button
      id={componentId}
      disabled={hasLoading && isButtonDisabled(shareButton)}
      aria-label={alt}
      onClick={() => clickHandler(onClick, styling, componentId)}
      type='button'
      className={`action-button ${getButtonStyle(styling)}`}
    >
      {hasLoading && isButtonLoading(componentId, shareButton) ? (
        <ButtonLoading loadPrimary={styling === 'primary'} />
      ) : (
        text
      )}
    </button>
  );
};

const clickHandler = (onClick, styling, componentId) => {
  const { actionFunction, analytics } = onClick;
  const type = styling === 'primary' ? 'whatsApp' : 'otherApps';
  if (actionFunction) {
    actionFunction(type, componentId, analytics);
  } else {
    onClick();
  }
};

const isButtonLoading = (componentId, shareButton) => {
  if (Object.keys(shareButton).length > 0) {
    return shareButton[componentId] && shareButton[componentId].isLoading;
  }
  return false;
};

const isButtonDisabled = (shareButton) => {
  return Object.values(shareButton).some(
    (button: ActionButtonProps) => button.isLoading === true
  );
};

function getButtonStyle(styling) {
  return `${styling}-button`;
}

ActionButton.propTypes = {
  alt: PropTypes.string,
  text: PropTypes.string,
  componentId: PropTypes.string,
  hasLoading: PropTypes.bool,
};

ActionButton.defaultProps = {
  text: 'voltar',
  alt: '',
  hasLoading: true,
};

export default ActionButton;
