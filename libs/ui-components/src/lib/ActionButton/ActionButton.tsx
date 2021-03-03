/* eslint-disable jsx-a11y/no-autofocus */
import PropTypes from 'prop-types';
import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import ButtonLoading from '../ButtonLoading/ButtonLoading';
import './_ActionButton.scss';

const clickHandler = (onClick, styling, componentId) => {
  const { actionFunction } = onClick;
  const buttonIndex = styling === 'primary' ? 0 : 1;
  const type = styling === 'primary' ? 'whatsApp' : 'otherApps';
  if (actionFunction) {
    actionFunction(type, buttonIndex, componentId);
  } else {
    onClick();
  }
};

const ActionButton = ({
  text,
  onClick,
  alt,
  styling,
  componentId,
  hasLoading,
}) => (
  <button
    id={componentId}
    disabled={hasLoading && isButtonDisabled()}
    aria-label={alt}
    onClick={() => clickHandler(onClick, styling, componentId)}
    type='button'
    className={`action-button ${getButtonStyle(styling)}`}
  >
    {hasLoading && isButtonLoading(componentId) ? (
      <ButtonLoading loadPrimary={styling === 'primary'} />
    ) : (
      text
    )}
  </button>
);

const isButtonLoading = (componentId) => {
  const shareButton = useSelector((state: RootStateOrAny) => state.share);
  if (Object.keys(shareButton).length > 0) {
    return shareButton[componentId] && shareButton[componentId].isLoading;
  }
  return false;
};

const isButtonDisabled = () => {
  const shareButton = useSelector((state: RootStateOrAny) => state.share);
  return Object.values(shareButton).some(
    (button: any) => button.isLoading === true
  );
};

export function getButtonStyle(styling) {
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
