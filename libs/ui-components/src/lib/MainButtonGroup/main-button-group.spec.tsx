import React from "react";
import { render } from "@testing-library/react";

import MainButtonGroup from "./MainButtonGroup";

describe("ButtonListContent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MainButtonGroup children={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
