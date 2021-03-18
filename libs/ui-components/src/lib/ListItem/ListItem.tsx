import React from "react";

import "./list-item.module.scss";

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
