import React from "react";
import { render } from "@testing-library/react";

import TipsContent from "./TipsContent";

describe("TipsContent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TipsContent />);
    expect(baseElement).toBeTruthy();
  });
});
