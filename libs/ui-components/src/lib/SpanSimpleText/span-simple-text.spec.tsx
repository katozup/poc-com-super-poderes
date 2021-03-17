import React from "react";
import { render } from "@testing-library/react";

import SpanSimpleText from "./SpanSimpleText";

describe("SpanSimpleText", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SpanSimpleText />);
    expect(baseElement).toBeTruthy();
  });
});
