import React from "react";
import { render } from "@testing-library/react";

import MainContent from "./MainContent";

describe("MainContent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MainContent children={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
