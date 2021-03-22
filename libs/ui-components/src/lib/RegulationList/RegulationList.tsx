import React from "react";

import "./_RegulationList.scss";

export function RegulationList({children}) {
  return (
    <div className="program-regulation-list-wrapper">
      {children}
    </div>
  );
}

export default RegulationList;
