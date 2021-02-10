import React from "react";
import { render } from "@testing-library/react";

import MobileHeader from "./MobileHeader";

describe("MobileHeader", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MobileHeader children={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
