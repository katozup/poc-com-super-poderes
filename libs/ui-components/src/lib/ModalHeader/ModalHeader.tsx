import React from 'react';

import './_ModalHeader.scss';

export function ModalHeader({ children }) {
  return <div className="modal-header">{children}</div>;
}

export default ModalHeader;
