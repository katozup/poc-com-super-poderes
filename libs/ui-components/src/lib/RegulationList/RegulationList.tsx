import React from "react";

import "./regulation-list.module.scss";

export function RegulationList({children}) {
  return (
    <div className="program-regulation-list-wrapper">
      {children}
    </div>
  );
}

export default RegulationList;
