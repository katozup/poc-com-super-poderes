import React from 'react';

import './main-reward-container.module.scss';

export interface MainRewardContainerProps {
  children;
  componentId;
}

export function MainRewardContainer(props: MainRewardContainerProps) {
  return <div id={props.componentId}>{props.children}</div>;
}

export default MainRewardContainer;
