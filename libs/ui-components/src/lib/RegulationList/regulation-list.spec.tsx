import React from "react";
import { render } from "@testing-library/react";

import RegulationList from "./RegulationList";

describe("RegulationList", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<RegulationList />);
    expect(baseElement).toBeTruthy();
  });
});
