import React from "react";

import "./_ListItem.scss";

/* eslint-disable-next-line */
export interface ListItemProps {
  componentId,
  children,
}

export function ListItem(props: ListItemProps) {
  return (
    <li className='program-regulation-item' id={props.componentId}>
      {props.children}
    </li>
  );
}

export default ListItem;
