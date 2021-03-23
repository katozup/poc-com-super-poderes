import React from "react";

import "./_ListItem.scss";

/* eslint-disable-next-line */
export interface ListItemProps {
  componentId,
  children,
}

export function ListItem(props: ListItemProps) {
  return (
    <div className='program-regulation-item' id={props.componentId}>
      {props.children}
    </div>
  );
}

export default ListItem;
