import React from "react";
import { render } from "@testing-library/react";

import IconComponent from "./IconComponent";

describe("IconComponent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<IconComponent />);
    expect(baseElement).toBeTruthy();
  });
});
