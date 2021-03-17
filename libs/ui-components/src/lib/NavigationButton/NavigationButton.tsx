import React from 'react';

import './_NavigationButton.scss';

function NavigationButton({ componentId, onClick, children }) {

  const clickHandler = (onClick) => {
    const { actionFunction, actionParameter } = onClick;
    if (actionFunction) {
      actionFunction(actionParameter);
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
