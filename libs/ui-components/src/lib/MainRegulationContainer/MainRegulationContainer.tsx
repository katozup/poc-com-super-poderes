import React from "react";

import "./_MainRegulationContainer.scss";

/* eslint-disable-next-line */
export interface MainRegulationContainerProps {}

export function MainRegulationContainer({ children }) {
  return <div className="reward-regulation-container">{children}</div>;
}

export default MainRegulationContainer;
