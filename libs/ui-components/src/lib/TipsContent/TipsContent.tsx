import React from 'react';

import './_TipsContent.scss';
export interface TipsContentProps {
  analytics;
  children;
}

export function TipsContent(props: TipsContentProps) {
  return <div className="tips-content-container">{props.children}</div>;
}

export default TipsContent;
