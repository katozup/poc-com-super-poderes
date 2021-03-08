import React from "react";
import { render } from "@testing-library/react";

import SimpleText from "./simple-text";

describe("SimpleText", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SimpleText />);
    expect(baseElement).toBeTruthy();
  });
});
