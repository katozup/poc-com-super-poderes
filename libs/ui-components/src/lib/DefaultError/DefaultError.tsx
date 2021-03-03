import React from 'react';
import './_DefaultError.scss';
import DefaultErrorIcon from './default_error.png';
import ActionButton from '../ActionButton/ActionButton';
import { RootStateOrAny, useSelector } from 'react-redux';
import { RESOURCES } from '@zup-mgm/utils';
import { BUSINESS_RULES } from '@zup-mgm/utils';

const { MAX_MANUAL_RETRY } = BUSINESS_RULES;

export function DefaultError(props) {
  const manualRetryCount = useSelector(
    (state: RootStateOrAny) => state.error.manualRetryCount
  );
  return (
    <div className='default-error'>
      <div className='error-header-block'>
        <img alt='' src={DefaultErrorIcon} className='error-img' />
      </div>
      <div className='error-content-block'>
        <h1
          id='lblTitle_error'
          className='error-title'
          aria-label='algo deu errado'
        >
          algo deu errado :&#40;
        </h1>
        <p id='lblContent_error' className='error-description'>
          Não foi possível carregar as informações.
        </p>
        {manualRetryCount < MAX_MANUAL_RETRY && (
          <a
            role='link'
            id={`lnkRetry_action`}
            type='button'
            tabIndex={0}
            className='retry-button'
            onClick={() => {
              props.retryAction();
            }}
            onKeyDown={() => {
              props.retryAction();
            }}
          >
            tentar novamente
          </a>
        )}
      </div>
      <div className='error-footer-block'>
        <ActionButton
          hasLoading={false}
          onClick={props.retryAction}
          styling='primary'
          text={RESOURCES.DEFAULT_ERROR.BUTTON.VOLTAR}
        />
      </div>
    </div>
  );
}

export default DefaultError;
