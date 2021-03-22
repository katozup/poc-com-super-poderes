import React from "react";
import { render } from "@testing-library/react";

import NavigationButton from "./NavigationButton";

describe("NavigationButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<NavigationButton />);
    expect(baseElement).toBeTruthy();
  });
});
