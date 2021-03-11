import React from "react";
import { render } from "@testing-library/react";

import NavigationButtonList from "./navigation-button-list";

describe("NavigationButtonList", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<NavigationButtonList />);
    expect(baseElement).toBeTruthy();
  });
});
