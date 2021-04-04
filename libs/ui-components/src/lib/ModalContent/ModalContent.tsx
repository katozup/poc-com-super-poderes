import { modalActions } from '@zup-mgm/mgm-redux-store';
import { slideDown, ANALYTICS_RULES } from '@zup-mgm/utils';
import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import './_ModalContent.scss';

const { MODAL } = ANALYTICS_RULES;

function ModalContent({ componentId, children, analytics }) {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootStateOrAny) => state.modal);
  const { pageLoad } = useSelector((state: RootStateOrAny) => state.app);
  const canDispatchPageLoad = (pageLoad) => pageLoad[MODAL];

  const clickHandler = () => {
    slideDown();
    dispatch(modalActions.closeModal());
  };

  const canShowModal = () => {
    return modalState.isModalVisible && componentId === modalState.componentId;
  };
  
  useEffect(() => {
    const trackPageLoad = (analytics) => {
      if (analytics && canShowModal() && canDispatchPageLoad(pageLoad)) {
        analytics.analyticsFunction(analytics.analyticsParameter);
      }
    };

    trackPageLoad(analytics);
  }, [analytics, componentId, modalState, pageLoad]);

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
