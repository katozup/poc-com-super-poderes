import React from 'react';

import './_TipsList.scss';
export interface TipsListProps {
  children;
}

export function TipsList(props) {
  return <ol className='tips-list-container'>{props.children}</ol>;
}

export default TipsList;
