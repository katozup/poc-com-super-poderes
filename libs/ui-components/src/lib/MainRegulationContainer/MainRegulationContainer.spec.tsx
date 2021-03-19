import React from "react";
import { render } from "@testing-library/react";

import MainRegulationContainer from "./MainRegulationContainer";

describe("MainRegulationContainer", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MainRegulationContainer />);
    expect(baseElement).toBeTruthy();
  });
});
