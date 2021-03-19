import { modalActions } from '@zup-mgm/mgm-redux-store';
import { slideDown } from '@zup-mgm/utils';
import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import './_ModalContent.scss';

function ModalContent({ componentId, children, analytics }) {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootStateOrAny) => state.modal);

  const clickHandler = () => {
    slideDown();
    dispatch(modalActions.closeModal());
  };

  const trackPageLoad = (analytics) => {
    if (analytics && canShowModal()) {
      analytics.analyticsFunction(analytics.analyticsParameter);
    }
  };

  const canShowModal = () => {
    return modalState.isModalVisible && componentId === modalState.componentId;
  };

  useEffect(() => {
    trackPageLoad(analytics);
  }, [modalState.isModalVisible]);

  if (canShowModal()) {
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
