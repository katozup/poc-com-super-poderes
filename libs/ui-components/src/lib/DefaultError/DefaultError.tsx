import React from 'react';

import './_DefaultError.scss';

import DefaultErrorIcon from './default_error.png';

import ActionButton from '../ActionButton/ActionButton';

//TODO: Colocar as props default

/* eslint-disable-next-line */
export function DefaultError(props) {
  console.log(props);
  return (
    <div className='default-error'>
      <div className='error-header-block'>
        <img alt='' src={DefaultErrorIcon} className='error-img' />
      </div>
      <div className='error-content-block'>
        <h1
          id={`lblTitle_`} //TODO: Rever esse id
          className='error-title'
          aria-label='algo deu errado'
        >
          algo deu errado :&#40;
        </h1>
        <p
          id={`lblContent_`} //TODO: Rever esse id
          className='error-description'
        >
          Não foi possível carregar as informações.
        </p>
        {props.retry && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            role='link'
            id={`lnkRetry_`} //TODO: Rever esse id
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
          componentId='lb_1' //TODO: Rever oque precisa ser passado
          onClick={() => props.backAction()}
          styling='primary'
          text="Opa"
        />
      </div>
    </div>
  );
}

export default DefaultError;
