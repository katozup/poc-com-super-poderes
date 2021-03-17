import React from 'react';

import './_ModalToggleButtonList.scss';

/* eslint-disable-next-line */
export interface ModalToggleButtonListProps {}

export function ModalToggleButtonList({ children }) {
  return <div className="modal-toggle-button-list-container">{children}</div>;
}

export default ModalToggleButtonList;
