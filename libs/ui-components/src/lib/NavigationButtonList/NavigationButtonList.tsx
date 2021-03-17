import React from 'react';

import './_NavigationButtonList.scss';

export function NavigationButtonList({ componentId, children }) {
  return <div className="navigation-button-list-container">{children}</div>;
}

export default NavigationButtonList;
