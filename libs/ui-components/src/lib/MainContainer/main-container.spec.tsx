import React from "react";
import { render } from "@testing-library/react";

import MainContainer from "./MainContainer";

describe("MainContainer", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MainContainer children={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
