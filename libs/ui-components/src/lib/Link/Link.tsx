import React from 'react';

import './_Link.scss';

const clickHandler = (onClick) => {
  const { actionFunction, actionParameter } = onClick;
  actionFunction(actionParameter.componentId);
};

export function Link(props) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a id={props.componentId} onClick={() => clickHandler(props.onClick)}>
      {props.text}
    </a>
  );
}

export default Link;
