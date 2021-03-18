import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import './_ModalContent.scss';
import { modalActions } from '@zup-mgm/mgm-redux-store';
import { slideDown } from '@zup-mgm/utils';

function ModalContent({ componentId, children }) {
  const dispatch = useDispatch();
  const state = useSelector((state: RootStateOrAny) => state.modal);

  const clickHandler = () => {
    slideDown();
    dispatch(modalActions.closeModal());
  };

  if (state.isModalVisible && componentId === state.componentId) {
    return (
      <div className='modal-wrapper'>
        <div className='backdrop' onClick={() => clickHandler()} />
        <div className='modal slideInUp' aria-modal>
          <div className='modal-content'>{children}</div>
        </div>
      </div>
    );
  }
  return <div></div>;
}

export default ModalContent;
