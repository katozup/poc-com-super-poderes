import React from 'react';

import './_NavigationButton.scss';

function NavigationButton({ componentId, onClick, children }) {

  const clickHandler = (onClick) => {
    const { actionFunction } = onClick;
    if (actionFunction) {
      actionFunction(onClick);
    }
  };

  return (
    <div
      id={componentId}
      onClick={() => clickHandler(onClick)}
      className='navigation-button-container'
    >
      {children}
    </div>
  );
}

export default NavigationButton;
