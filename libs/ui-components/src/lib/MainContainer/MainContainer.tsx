import React from 'react';

import './_MainContainer.scss';

/* eslint-disable-next-line */
export interface MainContainerProps {}

export function MainContainer({ children }) {
  return <div className="main-container">{children}</div>;
}

export default MainContainer;
